const { catalogJson } = require('../utils/catalogJSON');

function createTaskName(project, platform, taskType, businessUnit, mBox, timestamp) {
  try {
    let shortTaskType = '';

    if (taskType === 'Documentação de Tagueamento (WA)') {
      shortTaskType = 'DOCUMENTAÇÃO';
    } else if (taskType === 'Cadastro/Atualização de Oferta (CRO)') {
      shortTaskType = 'OPERACIONAL/SUSTENTAÇÃO';
    } else {
      shortTaskType = taskType;
    }

    // Formata o timestamp no formato dd-mm-yy-hh:mm
    const formattedTimestamp = new Date(timestamp).toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo', // Define o fuso horário como GMT-3
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(/\//g, '-').replace(', ', '-'); // Substitui as barras e virgulas por hifens

    // Concatena os valores em maiúsculas, separados por |
    let concatenatedTaskName = '';
    if (mBox) {
      concatenatedTaskName = (`${project}|${platform}|${shortTaskType}|${businessUnit}|${mBox}|${formattedTimestamp}`);
    } else {
      concatenatedTaskName = (`${project}|${platform}|${shortTaskType}|${businessUnit}|${formattedTimestamp}`);
    }

    return concatenatedTaskName.toUpperCase();

  } catch (error) {
    console.error(error);
  }
}

// Função para criar o JSON da oferta com os dados recebidos
function createOfferJSON(data) {
  const { project, platform, taskType, businessUnit, mBox, timestamp } = data;

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!project || !platform || !taskType || !businessUnit || !timestamp) {
    return { success: false, message: 'Missing required fields', offerJSON: null };
  }

  // Monta o JSON da oferta com os dados recebidos
  const selectedJson = catalogJson[mBox];

  // criar o Json a partir da mbox selecionada. Então deve-se puxar as chaves necessárias de cada mbox.

  selectedJson.payload.nomeOferta = selectedJson.payload.name = data.experienceNameA ? data.experienceNameA : selectedJson.payload.nomeOferta || 'Default Name';
  selectedJson.payload.backgroundColor = data.backgroundColorA;
  selectedJson.payload.imagemURL = data.figmaLinkA || null;
  selectedJson.payload.imagemFullscreen = data.figmaLinkA ? null : (data.fullscreenBannerA || null);
  selectedJson.payload.imagem = null;
  selectedJson.payload.corTitulo = data.colorTitleA;
  selectedJson.payload.corValor = data.colorSubtitleA;
  selectedJson.payload.acaoBotao = data.redirectionUrlA;
  selectedJson.payload.acao = data.redirectionUrlA;
  selectedJson.payload.deeplink = data.redirectionUrlA;
  selectedJson.payload.temaBotao = data.colorCtaButtonA;
  selectedJson.payload.corBotaoFechar = data.colorCloseButtonA;
  selectedJson.payload.textoAcessibilidade = data.callToActionA; // para teste com o texto acessibilidade

  // Retorna o JSON montado e uma mensagem de sucesso
  return {
    success: true,
    message: 'Offer JSON created successfully',
    offerJSON: selectedJson
  };
}

module.exports = {
  createTaskName,
  createOfferJSON,
};
