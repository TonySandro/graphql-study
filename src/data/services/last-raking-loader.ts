import { RankingScore } from '../../domain/entities';
import { RankingUnavailableError } from '../../domain/errors';
import { LoadLastRankingRepository } from '../contracts/load-last-ranking-repository';
import { LastRankingLoader } from './../../domain/usecases/last-raking-loader';

export class LastRankingLoadService implements LastRankingLoader {
    constructor(private loadLastRankingRepository: LoadLastRankingRepository) { }
    async load(): Promise<RankingScore[]> {
        if (new Date().getHours() > 21) {
            throw new RankingUnavailableError();
        }
        return this.loadLastRankingRepository.loadLastRanking()
    }
}