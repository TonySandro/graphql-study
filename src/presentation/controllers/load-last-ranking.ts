import { HttpResponse, Controller, ServerError, success } from './../contracts';
import { RankingScoreViewModel } from './../view-models';
import { LastRankingLoader } from './../../domain/usecases/last-raking-loader';

export class LoadLastrRanking implements Controller {
    constructor(private readonly lastRankingLoader: LastRankingLoader) { }

    async handler(): Promise<HttpResponse<RankingScoreViewModel[]>> {
        try {
            const ranking = await this.lastRankingLoader.load()

            return success(RankingScoreViewModel.mapCollection(ranking))
        } catch (error) {
            return ServerError(error)
        }
    }
}