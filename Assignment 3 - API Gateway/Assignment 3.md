# Goal

The goal of this assignment is to create an AWS Lambda function that can be invoked via API Gateway, which will return a greeting message with the name of the person passed in as a query parameter.

## Prerequisites
Before starting this assignment, make sure you have completed the previous assignment on creating a basic Lambda function in C# and know how to deploy it to AWS.

## Instructions
### Part 1: Create a new REST API in API Gateway
1. Open the AWS Management Console and navigate to the API Gateway service.
2. Click on the "Create API" button.
3. Choose "REST API" and click on "Build".
4. Choose "New API" and enter a name for your API.
5. Click on "Create API".

### Part 2: Create a new resource and method in API Gateway
1. With your new API selected, click on "Create Resource" under the "Actions" menu.
2. Enter a name for your new resource, such as "hello".
3. Click on "Create Resource".
4. With your new resource selected, click on "Create Method" under the "Actions" menu.
5. Choose "GET" as the HTTP method and click on the checkmark.
6. Choose "Lambda Function" as the integration type and tick the "Use Lambda Proxy integration" checkbox.
7. Select the region where you deployed your Lambda function.
8. Enter the name of your Lambda function in the "Lambda Function" field.
9. Click on "Save".

### Part 3: Deploy the API Gateway API
1. With your new method selected, click on "Deploy API" under the "Actions" menu.
2. Choose "New Stage" and enter a name for your stage, such as "prod".
3. Click on "Deploy".
4. Note down the "Invoke URL" that is displayed on the "prod" stage. You will use this URL to test your API.

### Part 4: Modify the Lambda function to accept query parameters
1. Open your C# Lambda function code in your IDE.
2. Modify the FunctionHandler method to accept a APIGatewayProxyRequest object as a parameter instead of a string.
3. Modify the FunctionHandler method to return a APIGatewayProxyResponse object instead of a string.
4. In the FunctionHandler method, retrieve the name query parameter from the APIGatewayProxyRequest object.
5. Modify the FunctionHandler method to return a JSON response that includes the greeting message with the name of the person.

### Part 5: Test the API Gateway API
1. Use a web browser or a tool like curl to make a GET request to the "Invoke URL" of your API Gateway API with the name query parameter set to your name. For example, if your name is John, the URL would be https://your-api-gateway-url/prod/hello?name=John.
2. Verify that the response you receive contains the greeting message with your name.