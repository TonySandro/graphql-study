import { setupRoutes } from './routes';

import express from 'express'

export const app = express()
setupRoutes(app)
