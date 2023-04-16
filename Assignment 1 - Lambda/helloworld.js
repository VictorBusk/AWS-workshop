export const handler = async(event) => {
    console.log('event', event)
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!: JWT secur'),
    };
    return response;
};