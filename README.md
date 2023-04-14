# AWS-workshop

Launch Lambda function
    Test Lambda with built in tester
Create API GateWay
    Rest API with CRUD - simpe
Create EC2
    SSH onto it - Linux
Create Launch Template + Auto Scaling
    Launch template need AMI
    Auto Scaling with min=1, desired=2 and max=3
    Watch instances spawn
    Kill instance
    See new spawn + Check auto scaling activity
Create S3
    Add at least 1 file to it
    Make policy fully awailable for all
    From EC2 ls (aws s3 ls)
    Change policy for s3 for only available from API GateWay
Create cognito user pool
    Add JWT to GateWay