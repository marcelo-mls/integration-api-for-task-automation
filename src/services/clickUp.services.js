require('dotenv').config();

// const { CLIENT_ID, CLIENT_SECRET } = process.env;

async function fetchClickUpAPI(token) {
  // https://clickup.com/api/

  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const url = '';

  const response = await fetch(url, { headers });
  return response.json();
}

module.exports = {
  fetchClickUpAPI
};
