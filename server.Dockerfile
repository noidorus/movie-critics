FROM node:20-alpine
WORKDIR /usr/src/app

COPY backend/package.json backend/yarn.lock ./
RUN yarn install --only=production --frozen-lockfile

COPY backend ./
RUN npx prisma generate && yarn build

EXPOSE 3000
CMD ["yarn", "run", "start:migrate:prod"]