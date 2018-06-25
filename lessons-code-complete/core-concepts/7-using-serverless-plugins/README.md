# Extending Serverless Functionality with plugins

- [Background](#background)
- [Lesson Steps](#lesson-steps)
- [Building Plugins](#building-plugins)
- [Complete code](#complete-code)

## Background

Sometimes users need custom functionality that the core serverless framework doesn't do out of the box.

To achieve this, users can extend the base cli functionality by tapping into lifecycle hooks or creating new hooks.

**Examples:**

- Transpile es6 or typescript code on `before:package` hook
- Scanning dependancies for security vulnerabilities on `before:deploy` hook
- Tapping into the `after:deploy` hook to run additional CI/CD workflows
- Wiring up custom domains on `after:deploy` hook
- etc

There are a ton of [serverless plugins](https://github.com/serverless/plugins#community-contributed-plugins) out there.

## Lesson Steps

1. **Discovering Plugins**

    **Via the CLI:**
    ```bash
    sls plugin list
    ```

    **Online:**

    Head to the [Serverless Plugins repository](https://github.com/serverless/plugins#community-contributed-plugins) for a list of available plugins

2. **Installing Plugins**

    ```bash
    sls plugin install -n serverless-manifest-plugin
    ```

    This command will install the plugin into your node_modules folder and save it to the package.json devDependencies.

    The command also automatically added this plugin to the `plugins` array in `serverless.yml`

    ```yml
    plugins:
      - serverless-manifest-plugin
    ```

3. **Configuring Plugins**

    Plugins handle a wide variety of use cases and thus have their own configuration requirements. Make sure to read the README.md of the plugin you are using to add any additional configuration it may require.

    Typically plugins will use settings defined in a `custom` key in `serverless.yml`

    ```yml
    # example
    custom:
      output:
        file: .serverless/manifest.json
    ```

    This will output cloudformation values into a `manifest.json` file for us for easily plugging into a frontend application

4. **Removing Plugins**

    ```bash
    sls plugin uninstall -n serverless-manifest-plugin
    ```

    Typically this works but some plugins aren't validating inputs. If you run into any errors, manually remove the plugin from the `plugins` array in the `serverless.yml` file


## Building Plugins

Building a plugin is very straight forward. Check out these resources for more information:

- [How To Write Your First Plugin For The Serverless Framework - Part 1](https://serverless.com/blog/writing-serverless-plugins/)
- [How To Write Your First Plugin For The Serverless Framework - Part 2](https://serverless.com/blog/writing-serverless-plugins-2/)
- [Super Simple Plugin Boilerplate](https://github.com/DavidWells/super-simple-serverless-plugin/blob/master/index.js)







## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/7-using-serverless-plugins)
