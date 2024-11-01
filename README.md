# Animes Reviewer

## About the project
A website of animes evaluation, made using the [Kitsu](https://kitsu.io) API. With a client made in React and server in Node.js. 

## Used technologies
- React
- TypeScript
- Docker
- Java Script
- CSS
- HTML

## Installation
**1 -** Clone the project:
```
git clone https://github.com/GustavoHenriqueSchmitz/Animes-Reviewer.git
```

**2 -** Install [Docker-Compose](https://www.docker.com)

**3 -** Go to the `client` directory and run:
```
npm i
```

**4 -** Go to the `server` directory and run:
```
npm i
```

## Initialization

### Client
**1 -** Simply open a terminal, go to the `client` directory and run the command:
```
npm start
```

### Server
**1 -** Open a terminal, and start the database with docker-compose going to the `server` directory and running the command:
```
docker-compose up
```

**2 -** Open another terminal, go to the `server` directory and then the `src` directory, and deploy the database migrations:
```
npx prisma migrate deploy
```

**3 -** Initialize prisma:
```
npx prisma generate
```

**4 -** You can return from the `src` directory to the `server` directory, then create a build of the server:
```
npx tsc
```

**5 -** Run the command:
```
npm run start
```

## Author
**Gustavo Henrique Schmitz**

**Linkedin:** https://www.linkedin.com/in/gustavo-henrique-schmitz  
**Portfolio:** https://gustavohenriqueschmitz.com  
**Email:** gustavohenriqueschmitz568@gmail.com  

