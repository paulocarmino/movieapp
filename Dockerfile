FROM node:16.16.0-alpine3.16
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN npx prisma generate
RUN yarn build

EXPOSE 4000
CMD ["yarn", "start", "-p", "4000"]
