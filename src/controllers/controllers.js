// const services = require('../services/clickUp.services');

async function processFormAnswers(req, res) {
  try {
    console.log(req.query);
    if(req.method === 'POST') {
      return res.status(201).json({ message: 'POST request successfully received', data: req.body});
    }

    return res.status(200).json({ message: 'GET request successfully received', query: req.query});
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  processFormAnswers
};
