const services = require('../services/answers.services');
 
async function processFormAnswers(req, res) {
  try {
    if(req.method === 'POST') {
      const { project, platform, taskType, businessUnit, mBox, timestamp } = req.body;

      // Lida com o nome da solicitação
      if (!project || !platform || !taskType || !businessUnit || !timestamp) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const taskName = services.createTaskName(project, platform, taskType, businessUnit, mBox, timestamp);

      // Lida com o JSON da oferta
      let offerJSONResult = {};
      if(taskType === 'Cadastro/Atualização de Oferta (CRO)') {
        offerJSONResult = services.createOfferJSON(req.body);

        if (!offerJSONResult.success) {
          return res.status(400).json({ message: offerJSONResult.message });
        }
      }
   
      const result = {
        taskName: taskName,
        offerJSON: offerJSONResult.offerJSON, // Inclui offerJSON no resultado retornado
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
