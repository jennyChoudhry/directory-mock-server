# Why use alpine: 
# https://blog.codeship.com/alpine-based-docker-images-make-difference-real-world-apps/ ..
FROM node:10.11.0-alpine

# Create app directory
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app

# For now, we only have the API 
EXPOSE 4000

# Install dependencies 
RUN npm install nps
RUN npm start install
 
# Ideally, this should be set in the build args: -e "NODE_ENV=dev"
ENV NODE_ENV=dev
CMD npm start api

## Run using:
# docker build  -t directory-mock-server/api .
# docker run -d --name=directory-mock-server-api -p 4000:4000 directory-mock-server/api
