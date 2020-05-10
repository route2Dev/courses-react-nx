# Courses React Nx

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Development server

Run `nx serve api` and `nx serve courses-react` for a dev server. Alternatively you can run `npm start`. Navigate to http://localhost:4201/. The api dev server is available at http://localhost:3333/. The app will automatically reload if you change any of the source files.

## Development in Docker

##### Developing in Docker uses volumes to enable automatic reloading. You will need to enable file sharing in Docker Desktop.

### Development

#### Starting the Docker Containers

Run `npm run start-docker-dev`. This is the same as `npm start` only using docker containers to host the development servers. Navigate to http://localhost:4201/. The app will automatically reload if you change any of the source files.

You can optionally pass a `-- -d` argument which will start the containers in detached mode add give you back your console.

#### Stopping the Docker Containers

Stop the containers by sending `Ctrl + C` (Windows) and wait for them to exit.  
or  
Run `npm run stop-docker-dev` or `docker-compose stop` (if you passed the `-- -d` argument)

#### Removing the Docker Containers and Shared Network

Run `npm run remove-docker-dev` or `docker-compose down`

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
