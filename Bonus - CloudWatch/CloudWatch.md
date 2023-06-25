## Objective

In this assignment, you'll get hands-on experience with Amazon CloudWatch, a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. Through the exploration of CloudWatch Logs Insights, you'll learn to analyze, visualize and gain operational insights from your logs. By the end of this assignment, you should be able to:

1. Navigate to Amazon CloudWatch and use Logs Insights for querying and visualizing logs from AWS resources.
2. Understand and create custom log queries to filter and summarize log data, focusing on specific aspects of your application.
3. Utilize the visualization features in CloudWatch Logs Insights to represent your log data graphically.
4. Create and customize a CloudWatch dashboard to monitor and display relevant data in real time.

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