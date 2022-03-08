# No console in Production

Disable all consoles in the production environments
<br>
<br>

## Installation
---
### Using <code>yarn</code>

````
yarn add @sshahzaiib/no-console
````
### Using ``npm``
````
npm i @sshahzaiib/no-console
````
<br>

## Usage
---
**Note:** You need to set "NODE_DEBUG" environment variable to true when running node server in prod mode to see logs.

````
const noConsole = require('@sshahzaiib/no-console);
or
import noConsole from '@sshahzaiib/no-console';

... 

noConsole(); // no console logs after this state in production if NODE_DEBUG is not set to true
````