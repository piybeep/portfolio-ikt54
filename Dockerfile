FROM node:lts-alpine as deps
WORKDIR /web
COPY package.json yarn.lock ./
RUN yarn install --production

FROM node:lts-alpine as builder
WORKDIR /web
COPY . .
RUN yarn build

FROM node:lts-alpine as runner
WORKDIR /web
ENV NODE_ENV production
COPY --from=builder /web/public ./public
COPY --from=builder /web/.next ./.next
COPY --from=builder /web/node_modules ./node_modules
COPY --from=builder /web/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]





# COPY * ./
# CMD ["yarn", "run", "build"]

# FROM node:lts-alpine as production
# COPY --from=deps /web/.next dest