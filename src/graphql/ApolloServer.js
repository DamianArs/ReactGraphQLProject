const { ApolloServer, gql } = require("apollo-server-express");
const { readFileSync } = require("fs");
const express = require('express')
const resolvers = require('./resolvers')

const app = express()
const server = new ApolloServer({
  typeDefs: gql`
    ${readFileSync(__dirname.concat("/schema.graphql"), "utf8")}
  `,
  resolvers,
});
server.applyMiddleware({app})
app.use((req, res) => {
  res.status(200);
  res.send('Hello!');
  res.end();
});
app.listen({ port: 4000 }, () => {}

)