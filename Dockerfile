FROM node:16.16.0-alpine3.16
WORKDIR /app

COPY package.json ./
RUN yarn install

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG TMDB_API
ENV TMDB_API=${TMDB_API}

COPY . .
RUN npx prisma generate
RUN npx prisma migrate deploy
RUN yarn build

EXPOSE 4000
CMD ["yarn", "start", "-p", "4000"]
