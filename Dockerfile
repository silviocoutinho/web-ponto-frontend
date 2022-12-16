#Build Stage
FROM node:14 as build

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY nginx-custom.conf /app

RUN npm install
COPY . /app
RUN npm run build

#Production Stage
FROM nginx:latest as production

COPY --from=build /app/build/ /usr/share/nginx/html
COPY --from=build /app/nginx-custom.conf /etc/nginx/conf.d/default.conf