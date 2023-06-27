# Introduction
In this assignment you will set up an API using API Gateway to utilize the aforementioned Lambda.
## Objective

This assignment is designed to deepen your understanding of AWS services by guiding you to integrate AWS Lambda and API Gateway, two pivotal services within the AWS ecosystem. By the end of this assignment, you will be able to:

1. Set up a REST API using API Gateway and understand the process of creating resources and methods.
2. Integrate a Lambda function with an API Gateway endpoint.
3. Modify a Lambda function to accept and process query string parameters.
4. Deploy the API and test it using the generated "Invoke URL".

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
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/helloworld.png)

### Part 3: Deploy the API Gateway API
1. With your new method selected, click on "Deploy API" under the "Actions" menu.
2. Choose "New Stage" and enter a name for your stage, such as "prod".
3. Click on "Deploy".
4. Note down the "Invoke URL" that is displayed on the "prod" stage. You will use this URL to test your API.

## Optional
### Part 4: Modify the Lambda function to accept query string and parameters
1. Go to Lambda and open your Lambda function in the code editor
2. Modify it to get a query string and make this input be reflected in some way.

Feel free to use my example called part4.js

### Part 5: Test the API Gateway API
1. Use a web browser or a tool like curl to make a GET request to the "Invoke URL" of your API Gateway API with the name query parameter set to your name.
For example, if your name is John, the URL would be https://your-api-gateway-url/prod/hello?name=John.
2. Verify that the response you receive contains the greeting message with your name.