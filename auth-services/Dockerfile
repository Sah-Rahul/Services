FROM node:22

WORKDIR /app

COPY package*.json ./

 
RUN npm install

COPY . .

EXPOSE 3000

 
CMD ["npx", "nodemon", "--watch", "src", "--exec", "ts-node", "src/server.ts"]
