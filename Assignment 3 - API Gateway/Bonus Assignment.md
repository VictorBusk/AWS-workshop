# API Gateway Assignment

In this assignment, you will create a REST API using AWS API Gateway and connect it to an AWS Lambda function.

## Requirements

1. Create a new Lambda function using the programming language of your choice. This function should take a JSON payload as input and return a JSON payload as output. Your function should also log any relevant information using console.log.
2. Create a new REST API in API Gateway. This API should have a single resource with a single method (e.g. GET, POST, PUT, etc.), and should be connected to your Lambda function.
3. Test your API using a REST API client such as Postman or cURL. Make sure that you can successfully invoke your Lambda function through the API Gateway.
4. Create a second resource and method in your API. This resource should require authorization using an API key. Configure your API Gateway to require the API key for access to this resource.
5. Test your API again using a REST API client, but this time include the API key in the request headers. Verify that you can only access the authorized resource when providing the correct API key.