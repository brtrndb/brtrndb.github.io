FROM node:latest AS base
ENV APPLICATION_DIR=/app

FROM base AS install
WORKDIR ${APPLICATION_DIR}
COPY package.json ${APPLICATION_DIR}/package.json
RUN yarn install

FROM base AS build
WORKDIR ${APPLICATION_DIR}
COPY --from=install ${APPLICATION_DIR}/node_modules ${APPLICATION_DIR}/node_modules
COPY . ${APPLICATION_DIR}
RUN yarn build

FROM nginx:alpine AS webapp
ARG APPLICATION_DIR=/app
COPY --from=build ${APPLICATION_DIR}/build /usr/share/nginx/html
