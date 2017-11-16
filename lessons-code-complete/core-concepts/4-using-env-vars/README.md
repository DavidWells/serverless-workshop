# Using environment variables

Environment variables are extremely handy for setting sensitive information such as secret API keys.

They keep things out of source control and are used very frequently in CI/CD flows.

This lesson will teach you the basics of using environment variables in lambda functions.

## Steps

1. In `serverless.yml`, add an environment key & value to the `provider` section. This will allow all functions in the secret to access the value. http://bit.ly/2yVp4CR

2. In `serverless.yml`, add an environment variable to the `bar` function. Adding `enviroment` to the function level scope them to a single function. http://bit.ly/2yVp4CR

3. In `handler.js`, access your newly created enviroment variable off of `process.env` and return it in the `foo` function response

4. In `handler.js`, access your newly created `bar` enviroment variable off of `process.env` and return it in the `bar` function response

5. After adding your environment variables to serverless.yml and handler.js.
Run `sls deploy` to deploy the service
