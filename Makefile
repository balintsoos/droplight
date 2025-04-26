start:
	docker compose up -d

rebuild:
	docker compose stop
	docker compose build
	docker compose up -d

stop:
	docker compose stop
