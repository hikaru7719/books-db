FROM node:latest

MAINTAINER Hikaru Miyahara

ENV NODEPATH /node
ENV APP ${NODEPATH}/app

RUN mkdir -p ${APP}

COPY . ${APP}
WORKDIR ${APP}

RUN npm install

CMD npm run dev
