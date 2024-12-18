FROM node:16
WORKDIR /merisir/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["npm", "run", "start"]