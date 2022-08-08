const fetch = require("node-fetch");

const API = "https://api.freegeoip.app/json/?apikey=c42b25c0-68db-11ec-a1e5-2b9cb6d8cb04";

exports.handler = async function () {
  try {
    const data = await fetch(API)
      .then((data) => data.json())
      .then((data) => data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};
