require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
app.use(cors({
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
  // origin: ['http://127.0.0.1:5173'],
}));
app.use(express.json());
app.use(router);

const PORT = process.env.API_PORT;

app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
