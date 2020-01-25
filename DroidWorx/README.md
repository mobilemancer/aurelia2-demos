# DroidWorx

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

## Build the app

Build files to dist folder.

    npm run build

## Unit Tests

    npm run test

Run unit tests in watch mode.

    npm run test:watch

Unit tests run in browser through [browser-do](https://github.com/3cp/browser-do). Please check scripts in `package.json` for more details.

By default, browser-do shuts down browser after tests. To keep browser window open for inspection, pass additional argument `-k` or `--keep-open`.

    npm run build:test && browser-do -k --jasmine --browser chrome < dist/entry-bundle.js

Unit tests in watch mode is executed through stand webpack watch mode and the help of [webpack-shell-plugin-next](https://github.com/s00d/webpack-shell-plugin-next).


## Cypress e2e test

All e2e tests are in `cypress/integration/`.
Note the source code of the app and unit tests is in TypeScript, but e2e tests are in plain ESNext JavaScript. You can however [write e2e tests in TypeScript too for Cypress](https://docs.cypress.io/guides/tooling/typescript-support.html#Transpiling-TypeScript-test-files).

First, run the app in dev mode

    npm start

Then run e2e tests in another terminal window with

    npm run test:e2e

Note if your dev app is not running on port 9000, you need to modify `cypress.json` to update dev app port.

To run Cypress interactively, do

    npx cypress open

For more information, visit https://www.cypress.io
