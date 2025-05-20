# droplight

Self-hosted web application for monitoring household electricity and water consumption

## Technologies

React application with PocketBase as a backend in a Docker container

## Application

2-tab layout, apple-like design, dark theme
Tab 1: Manually insert current value of the meter, store it in PocketBase with the current date.
Tab 2: Show historical data queried from PocketBase in a graph for the daily consumption.

## Getting started

```yml
services:
  droplight:
    image: balintsoos/droplight
    container_name: droplight
    volumes:
      - ./pb_data:/pb/pb_data
    ports:
      - "8080:8080"
    restart: unless-stopped
```

## Local development

```bash
make start
```