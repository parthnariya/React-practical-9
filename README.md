### What is AWS?
- Amazon Simple Storage Service (AWS S3) is highly available, scalable, secure, durable cloud storage where we can store millions of data with very minimal rates.

[AWS hosted link](http://signup-demo-prac-9.s3-website-us-west-2.amazonaws.com/)

### Steps to host react app on S3
1. First create bucket
![Screenshot from 2022-04-14 17-28-15](https://user-images.githubusercontent.com/68768212/163386435-0286e73f-6b5c-40f3-815d-1252e8e01a3f.png)

2. Unblock all Public Access

![Screenshot from 2022-04-14 17-31-28](https://user-images.githubusercontent.com/68768212/163386684-93eae73c-acdc-4866-af80-dc92ff5674eb.png)

3. And Enable Static website hosting

![Screenshot from 2022-04-14 17-32-49](https://user-images.githubusercontent.com/68768212/163386827-3318aa92-136a-48be-ba5c-ee4393b51736.png)


4. Add Action in Git repo.
```
name: signup-demo-prac9
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - name: Build React App
        run: npm install && npm run build
      - name: Deploy app build to S3 bucket
        run: aws s3 sync ./build/ s3://signup-demo-prac-9 --delete

```

5. And add AWS credentials as Secrets of the action

![Screenshot from 2022-04-14 17-37-50](https://user-images.githubusercontent.com/68768212/163387888-3459811f-e65f-4be8-a3da-0b1074abccd0.png)
