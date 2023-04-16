## Intro
This one is all for fun. After this one you will have tried out DynamoDB and been around the different REST verbs.
This adds a bit of meat to the potatoes you saw earlier with the simple HelloWorld Function.
We get a bit closer to some real world solutions and also we have a bit of fun :)

### Part 1: DynamoDB
1. Go to DynamoDB and create a new table.
2. For you to be able to use my small example call the table "product-inventory" and make the partition key "productId".
Note: Feel free to modify as you please and construct your own API, but feel free to use mine.

## Part 2: Make a Lambda to use the DynamoDB table
1. Create a new node.js Lambda function and simply upload the Archive.zip in the "code" folder.
Note: All the code that has been zipped down is in the code folder as well.
2. Go to permissions for this Lambda function and give it AmazonDynamoDBFullAccess + CloudWatchFullAccess.
This will allow it to connect to DynamoDB and log to CloudWatch.

## Part 3: API Gateway
1. Create a new API Gateway
2. Add all the resources and methods corresponding to the code. See the picture for reference.
3. Deploy the API and call away from Postman.