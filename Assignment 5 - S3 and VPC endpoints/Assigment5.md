
## Introduction
In this assignment we will create an S3 bucket, add a file to it and access said file from an EC2 instance.
Afterwards we will modify the access to of the S3 using policies and a VPC endpoint.
Afterwards the EC2 instance should remain available, but blocked for everyone else.

## Objective
The goal of this assignment is to familiarize you with Amazon S3 (Simple Storage Service), an object storage service that offers industry-leading scalability, data availability, security, and performance. By manipulating IAM (Identity and Access Management) roles and VPC (Virtual Private Cloud) endpoints, you will also learn how to fine-tune access to your S3 resources. After completing this assignment, you will be capable of:

1. Creating an Amazon S3 bucket and uploading files to it.
2. Setting up an IAM role with S3 access permissions and associating it with an EC2 instance.
3. Accessing and interacting with an S3 bucket directly from an EC2 instance.
4. Creating a VPC endpoint for S3, allowing your EC2 instances to access the bucket without requiring public internet access.
5. Modifying S3 bucket policies to restrict access to a specific VPC endpoint.
6. Verifying access restrictions by testing S3 access from different environments.

## Part 1: Creating an S3 bucket
1. Log in to the AWS Management Console and navigate to the S3 service.
2. Click the "Create bucket" button.
3. Enter a unique name for your bucket and select a region. Click "Next".
4. Configure the bucket properties and permissions as desired. Click "Next".
5. Review your settings and click "Create bucket".
6. Navigate to your newly created bucket and upload a file to it.
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/s3.png)

## Part 2: Access the S3 from your EC2 instance
1. Go to IAM and create a new role.
2. Name the role whatever, but search for the permission AmazonS3FullAccess and add it.
3. Go to your EC2 instance from the earlier exercise and add the IAM role.
This can be done through Action -> Security -> Modify IAM role. Select the role you created.
4. Connect to the EC2 instanse and access the S3 bucket. Utilize these two commands:
aws s3 ls <- List all buckets
aws s3 ls s3://YOUR-BUCKET-NAME <- Lists the content of the specific bucket.
![alt text](https://github.com/VictorBusk/AWS-workshop/blob/main/Images/iam.png)

## Part 3: VPC endpoint policy
1. Go to VPC -> Endpoints -> Create endpoint
2. Create it with these configs (The ones not mentioned can be left as default):
Services: search for S3 and choose the one with instance type "Gateway"
VPC: Default
Route tables: The one that is Main:Yes
Policy: Full Access

## Part 4: Restrict S3 access
1. Go to your S3 bucket -> Permissions and change bucket policy
2. Change the custom policy into the one in CustomPolicyTemplate.txt AFTER you have adjusted the values.
The Bucket name is... the bucket name
The VPCE-ID is the VPC endpoint ID listed at VPC -> Endpoints
3. Save changes and head back to your EC2 instance. Verify that you still have access to the bucket, by running the same command as earlier.
4. (Optional) From your local machine run the same command and veirfy that you wont have access.
You need to have some configs as well as the AWS CLI for this. The configs:

export AWS_ACCESS_KEY_ID=YOUR-ACCESS-KEY && export AWS_SECRET_ACCESS_KEY=YOUR-SECRET && export AWS_REGION=us-east-1