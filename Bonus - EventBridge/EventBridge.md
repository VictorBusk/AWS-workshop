## Objective

In this assignment, you will familiarize yourself with AWS EventBridge, a serverless event bus service that makes it easy to connect your applications with data from a variety of sources. Your task will be to set up a recurring, automated task (also known as a "cron job") using EventBridge's schedule feature. The steps you will follow will help you to understand:

1. How to navigate to AWS EventBridge and set up a new schedule.
2. How to define and understand the parameters of a recurring schedule.
3. How to target a specific AWS Lambda function and apply this scheduled event to it.
4. The importance and application of enabling logging for tracking and debugging scheduled events.

### Steps
1. Go to EventBridge -> Schedule -> Create schedule
2. From here define the criteria for your cron job.
An example of this could be Recuring schedule -> Rate-based schedule with 10 min as value.
3. Choose Lambda as the target and pick one of the Lambdas created earlier
Make sure the target has logging enabled so you can track any future invocations.