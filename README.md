# Courses React Nx

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Development server

Run `nx serve api` and `nx serve courses-react` for a dev server. Navigate to http://localhost:4201/. The app will automatically reload if you change any of the source files. The api dev server is available at http://localhost:3333/.

## Development in Docker

Run `npm run start-docker` to build and run the api dev server and the courses-react dev server in docker containers. Navigate to http://localhost:4201/. The app will automatically reload if you change any of the source files.

### Developing in Docker uses volumes to enable automatic reloading. You will need to enable file sharing in Docker Desktop.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=courses-react` to generate a new component.

## Build

Run `nx build api` and `nx build courses-react` to build the projects. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test courses-react` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e courses-react` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
