FROM node:lts-alpine as dependencies
WORKDIR /web
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

FROM node:lts-alpine as runner
WORKDIR /web
ENV NODE_ENV production
COPY . .
COPY --from=dependencies /web/node_modules ./node_modules
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
