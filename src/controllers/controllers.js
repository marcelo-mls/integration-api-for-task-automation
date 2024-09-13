const services = require('../services/answers.services');
 
async function processFormAnswers(req, res) {
  try {
    if(req.method === 'POST') {
      const { project, platform, taskType, businessUnit, mBox, timestamp } = req.body;

      // Verifica se todas as chaves necessárias para criar o nome da task estão presentes
      if (!project || !platform || !taskType || !businessUnit || !timestamp) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const result = {
        taskName: services.createTaskName(project, platform, taskType, businessUnit, mBox, timestamp),
        offerJSON: '', // services.createOfferJSON()
        htmlEmailContent: '' // services.createEmailContent()
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
