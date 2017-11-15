# Advanced SNS Example

This example demonstrates how to use an external SNS or already existing SNS topic as an event source.

Note: The "external or already existing" SNS topic is created in `serverless.yml` via cloudformation in the `resources` section mainly for demonstrative purposes. Typically, you would already have an SNS topic `arn` to use as the function event source.
