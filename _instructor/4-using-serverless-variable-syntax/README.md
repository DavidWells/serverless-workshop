# Using Serverless variable syntax

Instead of hardcoding sensitive values in the `serverless.yml` file, you will want to reference them from other places outside of source control.

`serverless.yml` has a powerful variable system that allows you to reference values from a number of different places.

[See variable docs](http://bit.ly/2i91Puy)

## Steps

1. Create a `secrets.json` file and add a `MY_SECRET` key and random value in the file.

2. Use the [file reference syntax](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-in-other-files) to replace the hardcoded value for the for `MY_SECRET` value in the `serverless.yml`'s `environment` property.

3. create a `.gitignore` and add `secrets.json`. This will ensure it is not committed into source control

## Other Serverless variable sources:

- [environment variables](https://serverless.com/framework/docs/providers/aws/guide/variables#referencing-environment-variables)
- [CLI options](https://serverless.com/framework/docs/providers/aws/guide/variables#referencing-cli-options)
- [other properties defined in `serverless.yml`](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-properties-in-serverlessyml)
- [external YAML/JSON files](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-in-other-files)
- [variables from S3](https://serverless.com/framework/docs/providers/aws/guide/variables#referencing-s3-objects)
- [variables from AWS SSM Parameter Store](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-using-the-ssm-parameter-store)
- [CloudFormation stack outputs](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-cloudformation-outputs)
- [properties exported from Javascript files (sync or async)](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-in-javascript-files)
