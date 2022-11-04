# create a docker file for static html file
# docker build -t static-html-demo .
# docker run -d -p 80:80 static-html-demo

# Path: Dockerfile
FROM nginx:alpine

EXPOSE 4001

COPY . /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]