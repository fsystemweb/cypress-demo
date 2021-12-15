# Cypress Demo

This project going to be an example to implement cypress as an e2e testing tool.

## Set up

- Install node.js
- Initialize project
  `npm init -y`
- Install cypress
  `npm i cypress`
- Open cypress
  `npx cypress`

## Run

- Open Cypress GUI:
  `npm run test`

- Run Cypress ci with chrome:
  `npm run test-ci`

- Run Cypress ci with edge and chrome:
  `npm run test-ci:full`

## Fix Windows error

Follow this instructions:

- Open node_modules\cypress\lib\tasks\verify.js.
- Search for VERIFY_TEST_RUNNER_TIMEOUT_MS and change it from 30000 (default) to 100000.

## Documentation

Check the official webpage of cypress.

- https://docs.cypress.io/

## Read external values

Check this web:

- https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
