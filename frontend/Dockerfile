"/opt/jenkins/workspace/FE/frontend/Dockerfile" 12L, 229C                                                                                                                                                          12,27         All
FROM node:16.13.0

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN mkdir ./node_modules
COPY ./node_modules ./node_modules

RUN mkdir ./.next
COPY ./.next ./.next

CMD ["npm", "run", "start"]
