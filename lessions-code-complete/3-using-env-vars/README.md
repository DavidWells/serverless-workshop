# Using environment variables

Environment variables are extremely handy for setting sensitive information such as secret API keys.

They keep things out of source control and are used very frequently in CI/CD flows.

This lesson will teach you the basics of using environment variables in lambda functions.

## Steps

1. In `serverless.yml` add a new property under the `providers` key called `environment` and add in a key value pair `MY_ENV_VAR` equal to a random value.

2. In `handler.js` you know have access to the newly defined value on the `process.env` of the function. `console.log(process.env.MY_ENV_VAR)`

3. Run `sls deploy` and invoke your function

4. Run `sls logs -f functionName` and you will see your environment value console.logged
