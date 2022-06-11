import { setupApolloServer } from './apollo-server';
import { setupRoutes } from './routes';

import express from 'express'

export const app = express()
setupApolloServer(app)
setupRoutes(app)
