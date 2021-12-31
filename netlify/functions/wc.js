const fetch = require("node-fetch");

const API = "http://worldtimeapi.org/api/timezone/";

exports.handler = async function (event, context) {
  try {
    const data = await fetch(`${API}${event.queryStringParameters.tz}`);

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
