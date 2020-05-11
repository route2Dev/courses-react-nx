FROM node:alpine

LABEL maintainer="Dave Baumann"

ENV CONTAINER_PATH=/usr/src/app
ENV PORT=9000

WORKDIR $CONTAINER_PATH

COPY ./apps/api/package*.json ./

RUN npm install

COPY ./dist/apps/api ./

EXPOSE ${PORT}

CMD [ "node", "main.js" ]