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
| [1 Http Hello World](https://github.com/davidwells/sls-workshop/tree/master/lessons/core-concepts/1-http-hello-world)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/core-concepts/1-http-hello-world)  |
| [2 Http Post With Cors](https://github.com/davidwells/sls-workshop/tree/master/lessons/core-concepts/2-http-post-with-cors)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/core-concepts/2-http-post-with-cors)  |
| [3 Using Env Vars](https://github.com/davidwells/sls-workshop/tree/master/lessons/core-concepts/3-using-env-vars)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/core-concepts/3-using-env-vars)  |
| [4 Using Serverless Variable Syntax](https://github.com/davidwells/sls-workshop/tree/master/lessons/core-concepts/4-using-serverless-variable-syntax)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/core-concepts/4-using-serverless-variable-syntax)  |
| [5 Using Addition Resources](https://github.com/davidwells/sls-workshop/tree/master/lessons/core-concepts/5-using-addition-resources)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/core-concepts/5-using-addition-resources)  |
| [6 Using Serverless Plugins](https://github.com/davidwells/sls-workshop/tree/master/lessons/core-concepts/6-using-serverless-plugins)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/core-concepts/6-using-serverless-plugins)  |
| [7 Using Multiple Stages](https://github.com/davidwells/sls-workshop/tree/master/lessons/core-concepts/7-using-multiple-stages)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/core-concepts/7-using-multiple-stages)  |
| [Dynamodb Streams](https://github.com/davidwells/sls-workshop/tree/master/lessons/events/dynamodb-streams)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/events/dynamodb-streams)  |
| [S3](https://github.com/davidwells/sls-workshop/tree/master/lessons/events/s3)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/events/s3)  |
| [Schedule](https://github.com/davidwells/sls-workshop/tree/master/lessons/events/schedule)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/events/schedule)  |
| [Sns](https://github.com/davidwells/sls-workshop/tree/master/lessons/events/sns)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/events/sns)  |
| [Sns Advanced](https://github.com/davidwells/sls-workshop/tree/master/lessons/sns/sns-advanced)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/sns/sns-advanced)  |
| [Sns Basic](https://github.com/davidwells/sls-workshop/tree/master/lessons/sns/sns-basic)  | [Answers](https://github.com/davidwells/sls-workshop/tree/master/lessons-code-complete/sns/sns-basic)  |

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
