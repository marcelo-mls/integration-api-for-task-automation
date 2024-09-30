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

// function createOfferJSON() {
//   try {

//     return '';
//   } catch (error) {
//     console.error(error);
//   }
// }

// function createEmailContent() {
//   try {

//     return '';
//   } catch (error) {
//     console.error(error);
//   }
// }


module.exports = {
  createTaskName,
  // createOfferJSON,
  // createEmailContent,
};
