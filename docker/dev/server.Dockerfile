FROM node:20-alpine AS base
WORKDIR /usr/src/app

# Stage: backend-build
FROM base AS backend-build
WORKDIR /usr/src/app
COPY backend/package.json backend/yarn.lock ./
RUN yarn install --only=production --frozen-lockfile
COPY backend ./
RUN npx prisma generate && yarn build

# Stage: frontend-build
FROM base AS frontend-build
WORKDIR /usr/src/app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Stage: final
FROM base AS final
WORKDIR /usr/src/app 
COPY --from=backend-build /usr/src/app/package.json /usr/src/app/yarn.lock /usr/src/app/docker-entrypoint.sh /usr/src/app/wait-for-it.sh ./
COPY --from=backend-build  usr/src/app/prisma ./prisma
COPY --from=backend-build /usr/src/app/dist ./dist
RUN yarn install --only=production --frozen-lockfile
COPY --from=frontend-build /usr/src/app/dist ./dist/static

RUN apk add --no-cache bash
RUN chmod +x ./wait-for-it.sh ./docker-entrypoint.sh

EXPOSE 3001
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["yarn", "run", "start:migrate:prod"]