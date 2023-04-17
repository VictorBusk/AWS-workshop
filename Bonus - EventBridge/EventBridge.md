### Steps
1. Go to EventBridge -> Schedule -> Create schedule
2. From here define the criteria for your cron job.
An example of this could be Recuring schedule -> Rate-based schedule with 10 min as value.
3. Choose Lambda as the target and pick one of the Lambdas created earlier
Make sure the target has logging enabled so you can track any future invocations.