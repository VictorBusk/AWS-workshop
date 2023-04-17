### Steps
1. Go to CloudWatch -> Logs insight
2. Visualize logs for any Lambda Function
3. Adjust the logging query to search for anything that might be relevant to show. An example:

fields @timestamp, userId
| filter message like /User feed has been invoked/
| stats count_distinct(userId) as userIds by bin(7d)

4. Go to the vizualization tab and see the graph
5. Add to a new dashboard
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/dashboard.png)