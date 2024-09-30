const services = require('../services/answers.services');
 
async function processFormAnswers(req, res) {
  try {
    if(req.method === 'POST') {
      const { project, platform, taskType, businessUnit, mBox, timestamp } = req.body;

      // Verifica se todas as chaves necessárias para criar o nome da task estão presentes
      if (!project || !platform || !taskType || !businessUnit || !timestamp) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Chama a função createTaskName
      const taskName = services.createTaskName(project, platform, taskType, businessUnit, mBox, timestamp);

      // Chama a nova função createOfferJSON
      const offerJSONResult = services.createOfferJSON({ project, platform, taskType, businessUnit, mBox, timestamp });

      // Verifica se houve erro na criação do offerJSON
      if (!offerJSONResult.success) {
        return res.status(400).json({ message: offerJSONResult.message });
      }

      const result = {
        taskName: taskName,
        offerJSON: offerJSONResult.offerJSON, // Inclui offerJSON no resultado retornado
        htmlEmailContent: '' // Pode adicionar mais dados se necessário
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
