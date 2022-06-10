import { FakeRankingRepository } from './../../infra/repositories/fake-ranking';
import { LoadLastRankingController } from '../../presentation/controllers'
import { LastRankingLoadService } from '../../data/services/last-raking-loader'
import { Controller } from '../../presentation/contracts';


export const makeLoadLastRankingController = (): Controller => {
    const repo = new FakeRankingRepository()
    const loader = new LastRankingLoadService(repo)
    return new LoadLastRankingController(loader)
}