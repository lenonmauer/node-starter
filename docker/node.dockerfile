FROM node:12

RUN npm i -g yarn

WORKDIR /home/app

COPY package.json .
COPY yarn.lock .

RUN ls

RUN yarn

COPY . .

RUN ls
