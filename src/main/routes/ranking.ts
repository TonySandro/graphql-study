
import { adaptRoute } from '../adapters/express-router'
import { makeLoadLastRankingController } from '../factories/load-last-ranking-controller'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()))
}