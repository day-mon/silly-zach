# create a docker file for static html file
# docker build -t static-html-demo .
# docker run -d -p 80:80 static-html-demo

# Path: Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
