FROM node:lts-buster
RUN mkdir -p /workspace
WORKDIR /workspace
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start"]