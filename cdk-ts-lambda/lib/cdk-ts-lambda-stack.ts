import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda } from 'aws-cdk-lib';
const path = require("path")

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkTsLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create a lambda function 
    const fn = new aws_lambda.Function(
      this,
      "CdkTsLambdaFunctionDemo",
      {
        runtime: aws_lambda.Runtime.PYTHON_3_8,
        handler: "handler.handler",
        code: aws_lambda.Code.fromAsset(
          path.join(__dirname, "lambda")
        )
      }
    )
  }
}
