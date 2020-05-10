FROM node:alpine

LABEL maintainer="Dave Baumann"

ENV CONTAINER_PATH=/usr/src/app

WORKDIR $CONTAINER_PATH

COPY package*.json ./

RUN npm install -g @nrwl/cli --silent

EXPOSE 4201

RUN npm install --silent

RUN apk --no-cache add curl

CMD ["npm", "run", "start-docker"]
