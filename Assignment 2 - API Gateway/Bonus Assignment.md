# API Gateway Assignment

In this assignment, you will create a REST API using AWS API Gateway and connect it to an AWS Lambda function.

## Requirements

## Part 1: Setup API Key
1. In API Gateway -> YOUR-API -> go to the tab called "API Keys"
2. Create a new API Key and name it whatever
3. Go to the Usage Plan tab and create a new one
The initial page with throttling settings can just be unticked as it is not relevant for this assignment.
On the second page add your API and the stage you have deployed it in.
On the thrid page add the API Key.

## Part 2: Add API Key to the request
1. Go to the API method -> Method request
2. Change API Key Required to true
3. Deploy the API again after the change
4. From Postman or curl call the API again and you should be rejected.
Note: It might take about a minut from the deployment before the change happens
5. In the headers of your call add x-api-key with the value being the API Key you generated earlier.
Note: Go back to API Keys to list it.
6. Call with the API Key added and verify that you now get status code 200.