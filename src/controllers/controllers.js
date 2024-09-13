// const services = require('../services/clickUp.services');

async function processFormAnswers(req, res) {
  try {
    if(req.method === 'POST') {
      const { project, platform, taskType, businessUnit, mBox, timestamp } = req.body;

      // Verifica se todas as chaves necessárias para criar o nome da task estão presentes
      if (!project || !platform || !taskType || !businessUnit || !timestamp) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

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


      const result = {
        taskName: concatenatedTaskName.toUpperCase()
      };

      return res.status(200).json({ message: 'POST request successfully processed', result });
    }

    return res.status(200).json({ message: 'GET request successfully received', query: req.query});
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  processFormAnswers
};
