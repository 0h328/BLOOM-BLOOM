FROM node:16.13.0

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN mkdir ./node_modules
COPY ./node_modules ./node_modules

RUN mkdir ./.next
COPY ./.next ./.next

RUN mkdir ./public
RUN mkdir ./public/img
COPY ./public ./public

CMD ["npm", "run", "start"]
