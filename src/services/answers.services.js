const { catalogJson } = require('../utils/catalogJSON');
const { createDedicatedJSON, getTypeAB } = require('../utils/dinamicJSON');

/* function createTaskName(project, platform, taskType, businessUnit, mBox, timestamp) {
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
}*/

// Função para criar o JSON da oferta com os dados recebidos
function createOfferJSON(data) {
  const { project, platform, taskType, businessUnit, mBox, timestamp } = data;

  // Verifica se todos os campos obrigatórios estão presentes
  if (!project || !platform || !taskType || !businessUnit || !mBox || !timestamp) {
    return { success: false, message: 'Missing required fields', offerJSON: null };
  }

  // Verifica se a mBox existe no catalogJson
  if (!catalogJson[mBox]) {
    return { success: false, message: `Invalid mBox: ${mBox}`, offerJSON: null };
  }

  try {
    // Usa getTypeAB para verificar se o taskType é 'AB' e, nesse caso, retorna o JSON dedicado
    const generatedJson = getTypeAB(taskType) ? getTypeAB(taskType)(data, mBox) : createDedicatedJSON(data, mBox);

    // Verifica se o JSON foi gerado corretamente
    if (!generatedJson || !generatedJson.payload) {
      return { success: false, message: 'Failed to generate the offer JSON', offerJSON: null };
    }

    // Retorna o JSON gerado e uma mensagem de sucesso
    return { success: true, message: 'JSON generated successfully', offerJSON: generatedJson };

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  // createTaskName,
  createOfferJSON,
};
