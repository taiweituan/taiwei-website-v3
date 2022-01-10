FROM node:16-alpine as base
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
# COPY .npmrc .

FROM base AS base1
RUN npm ci

# copy app files & run dev server
FROM base1 AS base2
COPY . .
CMD ["npm", "start"]