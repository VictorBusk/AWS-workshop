export const handler = async (event, context) => {
  console.log('event', event)
  const response = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    let name = null;
    if (event.queryStringParameters && event.queryStringParameters.name) {
      name = event.queryStringParameters.name;
    }

    if (!name) {
      response.statusCode = 200;
      response.body = JSON.stringify({ message: "Hello, world!" });
    } else {
      response.statusCode = 200;
      response.body = JSON.stringify({ message: `Hello, ${name}!` });
    }
  } catch (ex) {
    response.statusCode = 500;
    response.body = JSON.stringify({ error: ex.message });
  }

  return response;
};