FROM node:21.6.1-alpine3.18 as buildbase

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.25.3-alpine3.18

COPY --from=buildbase /app/build /usr/share/nginx/html