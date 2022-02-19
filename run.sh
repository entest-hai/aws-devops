aws cloudformation create-stack \
 --stack-name cfn-custom-resource-demo \
 --template-body file://custom.yaml \
 --capabilities CAPABILITY_NAMED_IAM

aws cloudformation update-stack \
  --stack-name cfn-custom-resource-demo \
  --template-body file://custom.yaml \
  --capabilities CAPABILITY_NAMED_IAM

aws cloudformation delete-stack \
  --stack-name cfn-custom-resource-demo


client.create_bucket(Bucket=bucket_name, CreateBucketConfiguration={'LocationConstraint': 'ap-southeast-1'})