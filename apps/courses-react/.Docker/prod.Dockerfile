FROM nginx:stable-alpine

LABEL maintainer="Dave Baumann"

COPY ./dist/apps/courses-react ./usr/share/nginx/html/dist
COPY ./nginx/nginx.conf ./etc/nginx/nginx.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]