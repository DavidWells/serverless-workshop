# Triggering functions via cron schedules

This lesson will walk you through triggering lambda functions from an scheduled cron job.

Running cron jobs from serverless functions can dramatically reduce your costs associated with scheduled running jobs.

## Lesson Steps

1. In `serverless.yml`, add a `schedule` event to trigger this function every minute. See `schedule` event docs: http://bit.ly/2ACbjVU

2. In `handler.js`, use the `cronFunction` function to do something interesting

3. Deploy your cron

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    Your cron should be running. Use the `sls logs` command to see the live logs

    ```
    sls logs -f cronFunction -t
    ```

4. Implement a second function using the `cron` syntax

    See [Schedule Expressions for Rules](http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html) docs for more information

    Example:

    ```yml
    functions:
      crawl:
        handler: crawl
        events:
          - schedule: cron(0 12 * * ? *)
    ```


