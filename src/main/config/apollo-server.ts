import typeDefs from '../graphql/type-defs';
import resolvers from '../graphql/resolvers';

import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';

export const setupApolloServer = (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs
  })
  server.start().then(res => {
    server.applyMiddleware({ app })
  })
}