FROM node:20-alpine
WORKDIR /usr/src/app

COPY backend/package.json backend/yarn.lock ./
RUN yarn install --only=production --frozen-lockfile

COPY backend ./
RUN npx prisma generate && yarn build

RUN apk add --no-cache bash
RUN chmod +x ./wait-for-it.sh ./docker-entrypoint.sh

EXPOSE 3001
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["yarn", "run", "start:migrate:prod"]