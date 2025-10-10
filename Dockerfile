FROM node:alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/bitscape-app/browser/ /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
