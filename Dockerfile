FROM node:14 as base
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .

FROM base AS base1
RUN npm ci

# copy app files & run dev server
FROM base1 AS base2
COPY . .
CMD ["npm", "start"]
