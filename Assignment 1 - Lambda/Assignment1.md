# AWS Lambda Assignment

## Introduction
In this assignment, you will create a simple AWS Lambda function using the AWS Management Console.

## Objective
The aim of this assignment is to provide you with a hands-on experience with AWS Lambda, a key service in the Amazon Web Services suite. By the end of this assignment, you will have gained the ability to:

1. Navigate and understand the AWS Management Console, particularly the Lambda service.
2. Create and configure a simple AWS Lambda function from scratch using Node.js.
3. Understand and manage Lambda function permissions with a new role.
4. Modify the function code and understand how to deploy changes.
5. Run a test event and interpret the results.

## Steps
1. Go to the AWS Management Console and navigate to the Lambda service.
2. Click on "Create function".
3. Choose "Author from scratch".
4. Enter a name for your function.
5. Choose node.js as the runtime.
6. Under "Permissions", choose "Create a new role with basic Lambda permissions".
7. Click "Create function".
8. In the "Function code" section, replace the existing code with the code in "helloworld.js".
9. Click "Deploy" to save the function.
10. Click "Test" and create a new test event. You can leave the body blank but I suggest going with the default request body. This will give you more inside of what is logged:

    {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }

11. Click "Test" again and view the results.