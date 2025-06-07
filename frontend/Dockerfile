# Stage 1: Build
FROM node:18-alpine as builder

WORKDIR /app


ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL


COPY package*.json ./
RUN npm install

COPY . .


RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]

