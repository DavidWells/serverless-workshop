# Using Serverless variable syntax

- [Background](#background)
- [Lesson Steps](#lesson-steps)
- [Serverless variable sources](#serverless-variable-sources)
- [Complete code](#complete-code)

## Background

Instead of hardcoding sensitive values in the `serverless.yml` file, you will want to reference them from other places outside of source control.

`serverless.yml` has a powerful variable system that allows you to reference values from a number of different places.

For more information [see the variable docs](http://bit.ly/2i91Puy)

## Lesson Steps

1. Create a `secrets.json` file in this directory and add a `MY_SECRET` key and random value in the file.

    ```json
    {
      "VAR_FROM_FILE": "super-secret-api-key"
    }
    ```

    Note: This is just an example of one variable source (a file reference), for production applications you would typically use the `ssm` variable source to pull sensitive values from AWS SSM secret management service

2. In `serverless.yml`, replace the hardcoded value for the for `MY_SECRET` environment variable with a serverless variable using the file reference syntax `${file(path):key}`. Reference the `VAR_FROM_FILE` value from `secrets.json`

3. Create a `.gitignore` file in this directory ignore the `secrets.json` file.

    This is important for keeping secret values, like API keys, out of version control.

4. After adding the new file reference variable, it's time to deploy. Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    If you run into an error, check that the [serverless variable syntax](http://bit.ly/2i91Puy) is correct.

5. Trigger the function and validate your variable is correct.

    Visit the url and validate your variable is in the response.

    ```bash
    https://xyz-123.execute-api.us-east-1.amazonaws.com/dev/foo
    ```

    or open your terminal and run the following command:

    ```bash
    sls invoke -f foo
    ```

## Serverless variable sources

- [environment variables](https://serverless.com/framework/docs/providers/aws/guide/variables#referencing-environment-variables)
- [CLI options](https://serverless.com/framework/docs/providers/aws/guide/variables#referencing-cli-options)
- [other properties defined in `serverless.yml`](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-properties-in-serverlessyml)
- [external YAML/JSON files](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-in-other-files)
- [variables from S3](https://serverless.com/framework/docs/providers/aws/guide/variables#referencing-s3-objects)
- [variables from AWS SSM Parameter Store](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-using-the-ssm-parameter-store)
- [CloudFormation stack outputs](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-cloudformation-outputs)
- [properties exported from Javascript files (sync or async)](https://serverless.com/framework/docs/providers/aws/guide/variables#reference-variables-in-javascript-files)






## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/5-using-serverless-variable-syntax)
