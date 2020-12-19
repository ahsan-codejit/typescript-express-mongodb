# typescript-express-mongodb
Dockerised rest api example using Nodejs, TypeScript, Expressjs, MongoDB etc

## Requirements
- nodejs [https://nodejs.org/en/download/package-manager/]
- MongoDB installed
- Git
- Docker if the project is run by docker-compose, in that case, mongodb is not required.
  docker-compose includes mongo

## App Instructions
Run following commands
- git clone git@github.com:ahsan-codejit/typescript-express-mongodb.git
- cd task-assign-manager
- npm install 

## Settings
Add mongo url and port in /.env
- Default port is 5000 
- Default mongo url is "mongodb://localhost:27017/venturemanager"
- create a file called '.env' in root directory with settings content follows .env.example

## Test and Coverage
Test commands are
- npm test
- npm run test:coverage:watch (for test and coverage with watch)
- npm run test:coverage (for test and coverage)

## App run commands
- npm start
- npm run start:dev (dev mood)

## Run app with docker compose
- docker-compose build
- docker-compose up -d

server will start with default 5000 port on url http://localhost:5000

## Apis 
- GET /api/venture (to get list of ventures)
- POST /api/venture (to create venture)
- GET /api/venture/:id (to get a venture)
- PUT /api/venture/:id (to update a venture)
- See Details on postman documentation - https://documenter.getpostman.com/view/10216195/TVYM3ajU

## Test with postman
A postman collection of apis has been added in /docs, import it on postman. Follow the following instructions to test apis-
* Run the app with command 'npm start' in project root directory, then open postman and import postman collection from /docs . then CreatVenture, GetVentures, GetVenture and UpdateVenture apis will be imported. 
* CreateVenture will create a venture. submit request with your desired json data following already added request body in the postman.
* GetVentures will return list of all ventures
* GetVenture , it requires venture id in url. To test the api, copy an id from GetVenture's returned list and past it on GetVenture's url
* UpdateVenture api will update base on the request body, venture id and owner are not editable.
To test the api, copy an id of an assigned venture from venture list, then use it on url of it, then submit. As soon as venture is resolved and agent gets free, another unassigned venture will be assigned to that agent.
