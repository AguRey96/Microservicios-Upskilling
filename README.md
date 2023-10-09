### Star Wars Microservices REST API ###

Welcome to the Star Wars Microservices REST API, a collection of microservices that provide information about the Star Wars universe.

### Features ###

- CRUD operations for Characters, Planets and Films from Star Wars universe.
- Error handling

### Technologies

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- HTTP-Proxy-Middleware
- Docker-compose

### Scripts

- `dev`: Run the server.

### Deployment

The Star Wars Microservices REST API is deployed and accessible on Google Cloud. You can interact with the API by making requests to the following base URL:

- Base URL: [http://34.151.214.144:8000/](http://34.151.214.144:8000/)
Please note that you do not need to set up or run the application locally. Simply use the provided base URL to access the API and explore the Star Wars universe.

### API endpoints

*Characters

GET /characters: Get all characters
GET /characters/:id Get only one by id
POST /characters: Create a new character
PUT /characters/:id Update a character by id
DELETE /characters/:id Delete a character by id

*Planets
GET /planets: Get all planets
GET /planets/:id Get only one by id
POST /planets: Create a new planet
PUT /planets/:id Update a planet by id
DELETE /planets/:id Delete a planet by id

*Films
GET /films: Get all film
GET /films/:id Get only one by id
POST /films: Create a new film
PUT /films/:id Update a film by id
DELETE /films/:id Delete a film by id
