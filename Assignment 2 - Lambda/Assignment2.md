# AWS Lambda Assignment 

## Introduction

In this assignment, you will create a simple AWS Lambda function using the AWS Management Console.

## Steps

1. Go to the AWS Management Console and navigate to the Lambda service.
2. Click on "Create function".
3. Choose "Author from scratch".
4. Enter a name for your function.
5. Choose ".NET Core 3.1" as the runtime.
6. Under "Permissions", choose "Create a new role with basic Lambda permissions".
7. Click "Create function".
8. In the "Function code" section, replace the existing code with the following:

    using Amazon.Lambda.Core;

    [assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

    public class Function
    {
        public string FunctionHandler(string input, ILambdaContext context)
        {
            return "Hello, world!";
        }
    }

9. Click "Deploy" to save the function.
10. Click "Test" and create a new test event with the following JSON:

    {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }

11. Click "Test" again and view the results.