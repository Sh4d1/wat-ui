FROM node:9-slim as builder 

#RUN apt-get update && apt-get -y install software-properties-common python-software-properties git build-essential gcc cpp g++ libc6 libc6-dev curl wget libkrb5-dev libcairo2-dev libjpeg-dev libjpeg8-dev libjpeg-turbo8-dev libpango1.0-dev libgif-dev libssl-dev

RUN apt-get update && apt-get -y install bzip2 git build-essential gcc curl wget 

RUN mkdir -p /vuejs && mkdir -p /vuejs/src

ADD ./ /vuejs

RUN cd /vuejs && npm install

ENV NODE_ENV development

WORKDIR /vuejs

RUN npm run build

FROM nginx:1.13-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=builder /vuejs/dist .

