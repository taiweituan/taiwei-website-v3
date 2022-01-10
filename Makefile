PROJECT=personal-website-v3
COMPOSE=docker-compose --file ./docker-compose.yml
COMPOSE_PROD=docker-compose --file ./docker-compose.prod.yml

##### Development #####
test:
	echo 'make file invoked!'

pull:
	$(COMPOSE) pull

build: pull
	$(COMPOSE) build

up:
	$(COMPOSE) up --remove-orphans

down:
	$(COMPOSE) down

kill:
	$(COMPOSE) kill

##### Production #####
pull-prod:
	$(COMPOSE_PROD) pull

build-prod: pull-prod
	$(COMPOSE_PROD) build

up-prod:
	$(COMPOSE_PROD) up --remove-orphans

down-prod:
	$(COMPOSE_PROD) down

kill-prod:
	$(COMPOSE_PROD) kill

containers:
	docker ps -a -q