docker-run:
	docker-compose -f docker/docker-compose.yml run --service-ports dev bash

docker-build:
	docker-compose -f docker/docker-compose.yml build dev
