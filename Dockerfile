FROM node:alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ARG API_URL
ENV API_URL=${API_URL}
RUN npm run build --configuration production

FROM node:alpine
WORKDIR /app
COPY --from=build /app/dist/bitscape-app /app/dist/bitscape-app
COPY --from=build /app/package*.json .
COPY --from=build /app/server.ts .
RUN npm install --production
EXPOSE 4000
ENV API_URL=${API_URL}
CMD ["npm", "run", "serve:ssr:bitscape-app"]