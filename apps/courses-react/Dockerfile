FROM node:alpine

# COPY ../dist/apps/courses-react /usr/share/nginx/html

# COPY ../nginx/nginx.conf /etc/nginx/nginx.conf

LABEL maintainer="Dave Baumann"

ENV CONTAINER_PATH=/usr/src/app

WORKDIR $CONTAINER_PATH

COPY package*.json ./

RUN npm install -g @nrwl/cli --silent

EXPOSE 4201

RUN npm install --silent

CMD ["nx", "serve"]