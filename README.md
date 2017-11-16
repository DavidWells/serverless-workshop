# Serverless Workshop

Welcome to the workshop. This repo will guide us through our serverless journey.

## Using this repo

Work from the **lessons** folders.

If you need help, look in the **lessons-code-complete** directory for the completed code.

```
|- lessons (work from these)
|- lessons-code-complete (answers if you need to see them)
```

## Table of Contents

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Using this repo](#using-this-repo)
- [Workshop Lessons](#workshop-lessons)
- [Helpful Tools](#helpful-tools)
- [Prerequisites & Setup Steps](#prerequisites--setup-steps)
- [Troubleshooting & FAQ](#troubleshooting--faq)
<!-- AUTO-GENERATED-CONTENT:END -->

## Workshop Lessons

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_LIST)-->
| Lesson | Final Code  |
|:--------------------------- |:-----|
| [1 Http Hello World](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/1-http-hello-world) <br/> Deploying Your First Endpoint | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/1-http-hello-world)  |
| [2 Http Dynamic Content](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/2-http-dynamic-content) <br/> Dynamic Content in Functions | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/2-http-dynamic-content)  |
| [3 Http Post With Cors](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/3-http-post-with-cors) <br/> Deploying an http POST endpoint with CORS support | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/3-http-post-with-cors)  |
| [4 Using Env Vars](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/4-using-env-vars) <br/> Using environment variables | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/4-using-env-vars)  |
| [5 Using Serverless Variable Syntax](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/5-using-serverless-variable-syntax) <br/> Using Serverless variable syntax | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/5-using-serverless-variable-syntax)  |
| [6 Using Addition Resources](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/6-using-addition-resources) <br/> Defining additional resources | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/6-using-addition-resources)  |
| [7 Using Serverless Plugins](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/7-using-serverless-plugins) <br/> Extending Serverless Functionality with plugins | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/7-using-serverless-plugins)  |
| [8 Using Multiple Stages](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/core-concepts/8-using-multiple-stages) <br/> Deploying to Multiple Stages | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/8-using-multiple-stages)  |
| [Dynamodb Streams](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/dynamodb-streams) <br/> Defining additional resources | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/dynamodb-streams)  |
| [Kinesis Basic](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/kinesis/kinesis-basic) <br/> Simple Kinesis Example | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/kinesis/kinesis-basic)  |
| [Kinesis](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/kinesis) <br/> Using Kinesis as an Event Source | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/kinesis)  |
| [S3](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/s3) <br/> Triggering Lambda functions from s3 events | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/s3)  |
| [Schedule](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/schedule) <br/> Triggering functions via cron schedules | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/schedule)  |
| [Sns](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/sns) <br/> Using AWS SNS as event source | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/sns)  |
| [Sns Advanced](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/sns/sns-advanced) <br/> Using External SNS Topics Example | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/sns/sns-advanced)  |
| [Sns Basic](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/sns/sns-basic) <br/> Basic SNS Example | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/sns/sns-basic)  |
| [Step Functions](https://github.com/DavidWells/serverless-workshop/tree/master/lessons/events/step-functions) <br/> Using AWS Step Functions | [Answers](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/step-functions)  |

<!-- AUTO-GENERATED-CONTENT:END -->

## Helpful Tools

- [PostMan](https://www.getpostman.com/) - desktop app for quick & easy endpoint testing
- [NVM](https://github.com/creationix/nvm) - Node version manager
- [yaml validator](http://yaml-online-parser.appspot.com/)
- [yaml linter & validator](https://jsonformatter.org/yaml-validator)

## Prerequisites & Setup Steps

1. **Install the latest LTS version of **[Node](https://nodejs.org/). [How to install Node](https://docs.npmjs.com/getting-started/installing-node).
2. **Install [git](https://git-scm.com/downloads) version control**.
3. **Setup a AWS account (if you don't already have one). **You can setup a free account here: [setup free AWS account](https://aws.amazon.com/free/). It's recommended to not use pre-existing AWS account running production code.
4. **[Install serverless CLI](https://serverless.com/framework/docs/getting-started/) **by running `npm install serverless -g` on the command line. 
5. **Run `serverless --help` in your terminal to validate the Serverless CLI works on your machine.**
6. **Then connect the serverless framework with your AWS credentials**. [See the docs](https://serverless.com/framework/docs/providers/aws/guide/credentials/) or [watch the video](https://www.youtube.com/watch?v=KngM5bfpttA)

## Troubleshooting & FAQ

- `Y A M L Exception`? check your `yaml` indentation syntax. [yaml validator](http://yaml-online-parser.appspot.com/) |  [yaml validator two](https://jsonformatter.org/yaml-validator)

- `Unable to import module 'handler': Error at Function.Module._resolveFilename (module.js:469:15)`

  This error means lambda can't find your included `node_modules`. Make sure you `npm install` in your project and install all your dependancies locally before running `sls deploy`

- `Unable to delete bucket` error. Your s3 bucket in question might have files in it. You will need to head into AWS cloudformation in the console and manually delete the stack.

- `Stack [xyz] cannot be deleted while in status UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS` This happens when cloudformation gets stuck in a weird state. You might need to log into the AWS console, head into cloudformation and delete the stack from the UI
