FROM node:22 as client-build

WORKDIR /app

COPY package.json package-lock.json ./
COPY ./workspaces/client ./workspaces/client

RUN npm ci
RUN npm run build --workspace client

FROM alpine:latest

ARG PB_VERSION=0.27.0

RUN apk add --no-cache \
  unzip \
  ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# uncomment to copy the local pb_migrations dir into the image
# COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the image
# COPY ./pb_hooks /pb/pb_hooks

COPY --from=client-build /app/workspaces/client/dist /pb/pb_public

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
