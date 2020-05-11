FROM node:alpine

LABEL maintainer="Dave Baumann"

ENV CONTAINER_PATH=/usr/src/app

WORKDIR $CONTAINER_PATH

COPY package*.json ./

RUN npm install -g @nrwl/cli --silent

EXPOSE 3333

RUN npm install --silent

CMD ["nx", "serve", "api"]