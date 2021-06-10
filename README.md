# Simple Website TDD starter

Includes test for the ReactApp and plain libraries.

## Getting started

Clone the repository, then run `npm ci` to install the dependencies.

Run `npm test` to run the tests once, use `npm run test:watch` to run them continuously for all changes.

Start the dev server using `npm start`.

## Configure automated deploy

This site only deploys after running tests using GitHub actions.

Configure these secrets in your GitHub repository:

- `NETLIFY_SECRET` ([generate one here](https://app.netlify.com/user/applications#personal-access-tokens))
- `NETLIFY_SITE_ID` (the API ID of your Netlify project)

Make sure to disable the Continuous Deployment builds on Netlify, so the are only triggered from GitHub Actions.
