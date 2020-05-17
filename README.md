<img align="right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" width="35">

# Courses React Nx

[![Build Status](https://dev.azure.com/route2solutions/Courses-React-Nx/_apis/build/status/Courses-React-Nx%20-%20CI?branchName=master)](https://dev.azure.com/route2solutions/Courses-React-Nx/_build/latest?definitionId=3&branchName=master)
[![Deployment Status](https://img.shields.io/azure-devops/release/route2solutions/b038de7d-ce60-4cd3-8c96-0d9948d3dcb3/1/1)](https://img.shields.io/azure-devops/release/route2solutions/b038de7d-ce60-4cd3-8c96-0d9948d3dcb3/1/1)

This project was generated using [Nx](https://nx.dev)<sup>🔎</sup>

## Inspiration

This project is a <strong>MonoRepo</strong> + <strong>Typescript</strong> + <strong>Formik</strong> adaptation of the [Building Applications with React and Redux](https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents) Pluralsight Course by Cory House.

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

## Build Docker Containers
Run `docker-compose -f doccker-compose.prod.yml build`

## Running unit tests

Run `nx test courses-react` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e courses-react` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/react) to learn more.
!

<p align="center">
    <a href="https://nx.dev/react/getting-started/why-nx" title="Why Nx"><img style="padding-right:50px" src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" height="75px"></a>
    <a href="https://jaredpalmer.com/formik/" title="Formik"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNjAgODQiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMzguODY5IDBsOS42OTQgNS41NzUtMzguMTc2IDIxLjk1My05LjY5NC01LjU3NEwzOC44NjkgMHptMTAuMDg1IDYuNzQ1TDExLjAxOCAyOC41NTFsLS4wMDEgMTEuMDMyIDM3LjkzNi0yMS44MDVWNi43NDV6TTMzLjY5OSAyOC4yNzZsLTIyLjYwMSAxMi45OS0uMDAyIDExLjAzNCAyMi42MDEtMTIuOTkyLjAwMi0xMS4wMzJ6bS04LjY2NCAxNy40NDFsLTEzLjk5IDguMDQyLS4wMDIgMTEuMDMzIDEzLjk5LTguMDQyLjAwMi0xMS4wMzN6TS4wMDQgMjMuMDE3bDkuNzUgNS42MDUtLjAwMyAxMS4wMzVMMCAzNC4wNTNsLjAwNC0xMS4wMzZ6bS4wOTMgMTIuNjRsOS42MzIgNS41MzctLjAwNCAxMS4wMzUtOS42MzItNS41MzYuMDA0LTExLjAzNnpNLjA5MiA0OC4yMjFsOS42MzYgNS41MzktLjAwNCAxMS43NjMtOS42MzYtNS41MzkuMDA0LTExLjc2M3pNMjEuNTY0IDg0bC05LjY5NC01LjU3NSAzNy43NDMtMjEuNzA0IDkuNjk0IDUuNTc1TDIxLjU2NCA4NHptLTEwLjQ2Mi02LjUyOWwzNy44NzktMjEuNzczLjAwMS0xMS4wMzItMzcuODc5IDIxLjc3My0uMDAxIDExLjAzMnpNMjYuMyA1NS45NzRsMjIuNjAxLTEyLjk5Mi4wMDEtMTEuMDMyLTIyLjYgMTIuOTktLjAwMiAxMS4wMzR6bTguNjY0LTE3LjQ0MmwxMy45OS04LjA0Mi4wMDItMTEuMDMzLTEzLjk5IDguMDQyLS4wMDIgMTEuMDMzem0yNS4wMzIgMjIuNzc0bC05Ljc1LTUuNjA1LjAwMy0xMS4wMzVMNjAgNTAuMjcxbC0uMDA0IDExLjAzNXptLS4wOTItMTIuNzExbC05LjYzMy01LjUzNy4wMDQtMTEuMDM1IDkuNjMzIDUuNTM2LS4wMDQgMTEuMDM2em0uMDA0LTEyLjU2NWwtOS42MzYtNS41MzguMDA0LTExLjU1MiA5LjYzNiA1LjUzOS0uMDA0IDExLjU1MnoiPjwvcGF0aD48L3N2Zz4=" width="75px"></a>
</p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**
