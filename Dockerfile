FROM node:7.7.2-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet
EXPOSE 3000
COPY . .