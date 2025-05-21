# droplight

Self-hosted web application for monitoring household electricity and water consumption.

## Technologies

React application with PocketBase as a backend in a Docker container.

## Application

2-tab layout, apple-like design, dark theme
Tab 1: Manually insert current value of the meter, store it in PocketBase with the current date.
Tab 2: Show historical data queried from PocketBase in a graph for the daily consumption.

## Getting started

Add the following service to your `docker-compose.yml`.

```yml
services:
  droplight:
    image: balintsoos/droplight
    container_name: droplight
    volumes:
      - ./pb_data:/pb/pb_data
    ports:
      - "8090:8090"
    environment:
      - PB_SUPERUSER_EMAIL=***
      - PB_SUPERUSER_PASSWORD=***
    restart: unless-stopped
```

Start the container and navigate to http://localhost:8090 to open the application and http://localhost:8090/_/ to open the PocketBase superusers dashboard.

## Local development

```bash
make start
```
Navigate to http://localhost:8090