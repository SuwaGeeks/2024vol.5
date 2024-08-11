FROM node:20
WORKDIR /app
COPY package.json package-lock.json ./
RUN apt-get update \
    && apt-get upgrade
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build"]
EXPOSE 3000