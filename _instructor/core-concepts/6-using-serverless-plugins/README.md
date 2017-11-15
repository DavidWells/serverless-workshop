# Extending Serverless Functionality with plugins

If you need the framework to handle use cases outside of the core cli commands, you can extend it's functionality by tapping into lifecycle hooks

Example: Tapping into the `after:deploy` hook to run additional CI/CD workflows

[Serverless Plugins List](https://github.com/serverless/plugins#community-contributed-plugins)

[Plugin Boilerplate](https://github.com/DavidWells/super-simple-serverless-plugin/blob/master/index.js)

## Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. Discovering Plugins

  **Via the CLI:**
  ```bash
  sls plugins list
  ```

  **Online:**  

  Head to the [Serverless Plugins repository](https://github.com/serverless/plugins#community-contributed-plugins) for a list of available plugins

2. Installing Plugins

  ```bash
  sls plugin install -n serverless-stack-output
  ```

  This command will install the plugin into your node_modules folder and save it to the package.json devDependencies.

  The command also automatically added this plugin to the `plugins` array in `serverless.yml`

  ```yml
  plugins:
    - serverless-stack-output
  ```

3. Configuring Plugins

  Plugins handle a wide variety of use cases and thus have their own configuration requirements. Make sure to read the README.md of the plugin you are using to add any additional configuration it may require.


  The `serverless-stack-output` plugin requires a new field in `serverless.yml`

  ```yml
  custom:
    output:
      file: .serverless/manifest.json
  ```

  This will output cloudformation values into a `manifest.json` file for us for easily plugging into a frontend application

4. Removing Plugins

  ```bash
  sls plugin uninstall -n serverless-stack-output
  ```

  Typically this works but some plugins aren't validating inputs. If you run into any errors, manually remove the plugin from the `plugins` array in the `serverless.yml` file
<!-- AUTO-GENERATED-CONTENT:END -->


<!-- Step 1. Discovering Plugins

  **Via the CLI:**
  ```bash
  sls plugins list
  ```

  **Online:**  

  Head to the [Serverless Plugins repository](https://github.com/serverless/plugins#community-contributed-plugins) for a list of available plugins
-->

<!-- Step 2. Installing Plugins

  ```bash
  sls plugin install -n serverless-stack-output
  ```

  This command will install the plugin into your node_modules folder and save it to the package.json devDependencies.

  The command also automatically added this plugin to the `plugins` array in `serverless.yml`

  ```yml
  plugins:
    - serverless-stack-output
  ```

-->

<!-- Step 3. Configuring Plugins

  Plugins handle a wide variety of use cases and thus have their own configuration requirements. Make sure to read the README.md of the plugin you are using to add any additional configuration it may require.


  The `serverless-stack-output` plugin requires a new field in `serverless.yml`

  ```yml
  custom:
    output:
      file: .serverless/manifest.json
  ```

  This will output cloudformation values into a `manifest.json` file for us for easily plugging into a frontend application
-->


<!-- Step 4. Removing Plugins

  ```bash
  sls plugin uninstall -n serverless-stack-output
  ```

  Typically this works but some plugins aren't validating inputs. If you run into any errors, manually remove the plugin from the `plugins` array in the `serverless.yml` file

-->
