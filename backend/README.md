# Kao Simple API with Docker running Postgres and uploading a "huge" CSV's

### Node 13.2.0 + NPM 6.13.1 + YARN 1.22.0


### Install/SETUP Environment

yarn

>You need to download the datasets to feed the DB
you can execute:
>>node downloadData.js
---
>You need docker and docker-compose to setup/feed the datasets to the DB
>>docker-compose -f docker-compose.yml up -d

### Run
node app.js 

### Basic Testing
yarn jest

### Lint
yarn lint

### Web API TEST 

#### Top Zones 
##### GET
http://localhost:3000/api/v1/db/top-zones/:order*
:order*= optional type = (dropoffs || pickups) if not provided is "dropoffs".

>example: http://localhost:3000/api/v1/db/top-zones/dropoffs

##### POST
curl -d "order=dropoffs" -X POST http://localhost:3000/api/v1/db/top-zones

#### Zones 
##### GET
http://localhost:3000/api/v1/db/zones

#### Zone Trips 
##### GET
http://localhost:3000/api/v1/db/zone-trips/:zone/date/:date

:zone= one zone of the zones table.
:date= date YYY-MM-DD

>example: http://localhost:3000/api/v1/db/zone-trips/LaGuardia Airport/date/2018-01-12

##### POST
curl -d "zone=LaGuardia Airport&date=2018-01-12" -X POST http://localhost:3000/api/v1/db/zone-trips

##### TODO
Tests with JEST...
 
 #### Info
Total hours on backend (10h ouch), including piping; Learning PG;
