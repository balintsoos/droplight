FROM node:22 AS client-build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --audit=false --fund=false

COPY . .
RUN npm run build

FROM alpine:latest
ARG PB_VERSION=0.27.0

RUN apk add --no-cache \
  unzip \
  ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

COPY ./pb_migrations /pb/pb_migrations
COPY ./pb_hooks /pb/pb_hooks
COPY --from=client-build /app/dist /pb/pb_public

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
