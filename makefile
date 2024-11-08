#!make
include .env
export $(shell sed 's/=.*//' .env)

clean: 
	rm -rf ./dist
	rm -rf node_modules

build: clean
	npm install 
	npm run compile

start-dev: build
	npm run dev

start-prod: build
	npm run start