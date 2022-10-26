FROM node:alpine AS app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine AS server
COPY --from=app /app/build/ /usr/share/nginx/html
COPY  --from=app /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80