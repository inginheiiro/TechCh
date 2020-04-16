# Kao Simple API with Docker running Postgres and uploading a huge CSV's

### Node 13.2.0 + NPM 6.13.1 + YARN 1.22.0

## SETUP Environment

>You need to download the datasets to feed to the DB
you can execute:
>>node downloadData.js
---
>You need docker and docker-compose to feed the datasets to the DB
>>docker-compose -f docker-compose.yml up -d

### Problems

Lack of advanced PG knowhow... 
Advanced SQL quering ...

## Project

###Install
yarn

###Running
node app.js 

###Basic Testing
yarn jest

###Lint
yarn lint

### Web API Top Zones 
 
### GET
http://localhost:3000/api/v1/db/top-zones/:order*
*order= optional type = (dropoffs || pickups) if not provided is "dropoffs".

### POST
curl -d "view=dropoffs" -X POST http://localhost:3000/api/v1/db/top-zones
