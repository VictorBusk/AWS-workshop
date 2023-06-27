## Objective
This assignment is designed to help you understand and use AWS EC2 Auto Scaling groups and Launch Templates, crucial tools for maintaining the reliability, availability, and performance of your AWS applications. Upon completing this assignment, you will be able to:

1. Create an EC2 Launch Template, which forms the basis for consistent and repeatable instance launches.
2. Establish an EC2 Auto Scaling group using the previously created Launch Template, ensuring that you have a reliable number of healthy instances.
3. Monitor and manage your EC2 instances, and understand the automatic replacement of instances in response to instance failure.
4. Navigate through the Auto Scaling Group dashboard and understand how to interpret the activity log.

## Part 1 - Create Launch template
1. Go to EC2 -> Launch template
2. Create new Launch template
In this step keep it simple. The only thing needed is when picking AMI, go for t2.micro as it is eligible for free tier.
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/launchtemplate.png)

## Part 2 - Create Auto-Scaling Group
1. Go to EC2 -> Auto-Scaling-groups
2. Fill in the form

Choose the template you created before as the launch template.
The min, max and desired will be reflected in the end. Go for a desired of 2 for this assignment.

3. After creation you should see in the status for the scaling group reflecting that new instances are being created.
Go check in the instance dashboard
4. Terminate one of the instances.
After a bit of time the chosen instance should be terminated and a new should take its place
5. Head back to scaling groups -> [YOUR SCALING GROUP] -> Activity and see that the activities have been logged
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/scalinggroup.png)