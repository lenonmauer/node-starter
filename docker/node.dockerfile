FROM node:12

RUN npm i -g yarn

WORKDIR /home/app

COPY ./backend/package.json .

RUN yarn

COPY ./backend .

RUN yarn build