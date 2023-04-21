# Getting Started with Sliding Puzzle Game

This project was bootstrapped with [Create React Index](https://github.com/facebook/create-react-app).

## How to start

Change your backend address and port in the config file `src/common/config.ts`

Then install dependencies and run your frontend, it will runs on localhost:3000
```allykeynamelanguage
yarn
yarn start
```

## Pros and cons

Pros: 
+ Axios + AxiosRetry middleware and interceptors(middlewares)
+ Chackra-UI - style model, better semantic and UI/UX
+ Just good, well-typed short react-app
+ Tests for populateProducts that the only ugly function in the assessment 

TODO:
+ mergeProducts function in src/pages/Index/Index.tsx, we need this function only because we can't touch backend. In general it should be simply be done by backend and population via sql. On large data will take longer time.
+ Tests, tests, tests, firstly cover main logic like refillWarehouse
    updateArticles, etc, then API in services and components and e2e
+ Add alliases like @common/@components, etc
+ Split types file by entities and create one point of export
+ Add/setup eslint and husky to check code before push
+ If we need specify treeshaking for chakra-ui and axios, or at all replace axios with plain js, to do bundle size smaller(if it is a requirement)
+ Move config to .env and add .env and .env.example files
+ Fix warnings in the console

## Stack

1. [Typescript](https://www.typescriptlang.org/)
2. [Chakra-UI](https://chakra-ui.com/) for UI elements 
3. React
4. Jest for tests, but needs more time to write them
