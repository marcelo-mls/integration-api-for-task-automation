const { catalogJson } = require('../utils/catalogJSON');
const { createDedicatedJSON } = require('../utils/dinamicJSON');

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
function createOfferJSON(data) { // alterar os acessos aos json para homeResumo1/homeResumo2...o código não está conseguindo verificar (e nem tem como) dash1,dash2
  const { project, platform, taskType, businessUnit, mBox, timestamp } = data;

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!project || !platform || !taskType || !businessUnit || !timestamp) {
    return { success: false, message: 'Missing required fields', offerJSON: null };
  }

  // Verifica se a mBox existe no catalogJson
  if (!catalogJson[mBox]) {
    return { success: false, message: `Invalid mBox: ${mBox}`, offerJSON: null };
  }

  try {
    // Chama a função para criar o JSON personalizado para a mBox
    const selectedJson = createDedicatedJSON(data, mBox);

    // Verifica se o selectedJson foi gerado corretamente
    if (!selectedJson || !selectedJson.payload) {
      throw new Error('Failed to generate the offer JSON');
    }

    // Retorna o JSON montado e uma mensagem de sucesso
    return {
      success: true,
      offerJSON: selectedJson
    };

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createTaskName,
  createOfferJSON,
};
