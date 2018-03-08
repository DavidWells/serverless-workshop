# Using environment variables

Environment variables are extremely handy for setting sensitive information such as secret API keys.

They keep things out of source control and are used very frequently in CI/CD flows.

This lesson will teach you the basics of using environment variables in lambda functions.

## Lesson Steps

1. In `serverless.yml`, add an environment key & value to the `provider` section. This will allow all functions in the service to access the value. http://bit.ly/2yVp4CR

2. In `serverless.yml`, add an environment variable to the `bar` function. Adding `environment` to the function level will scope the value to a single function. http://bit.ly/2yVp4CR

3. In `handler.js`, access the newly created environment variables

    Lambda environment variables are accessible on the `process.env` object in node.

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `foo` function response

4. In `handler.js`, access the newly created scoped `bar` environment variables

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `bar` function response

5. Now deploy the service

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

6. Verify the environment variables are set

    Invoke the functions to verify they are returning the environment values

    Open your terminal and run the following command:

    ```bash
    sls invoke -f foo
    # then
    sls invoke -f bar
    ```

    You can also verify environment keys are set by logging into the AWS console and opening up the lambda function




## Extra credit

Serverless variables can be nested together. This makes them very useful in a deployment setting.

Try and set a nested serverless variable in your service.

Example of nested variable:

```yml
yamlKey: ${file(foo.${opt.stage}.json)}

# First ${opt.stage} resolves
# then ${file(foo.WHATEVER.json)} resolves
```

We will be using these nested variables in future lessons


## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/4-using-env-vars)
