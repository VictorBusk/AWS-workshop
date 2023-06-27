console.log('Loading function');

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    console.log('value2 =', event.key2);
    console.log('value3 =', event.key3);

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!: JWT secur'),
    };
    return response;
};
