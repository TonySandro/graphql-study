import { ranking } from './../data-sources/ranking';
import { RankingScore } from '../../domain/entities';
import { LoadLastRankingRepository } from './../../data/contracts/load-last-ranking-repository';

export class FakeRankingRepository implements LoadLastRankingRepository {
    async loadLastRanking(): Promise<RankingScore[]> {
        return ranking.map(item => ({
            player: item.user,
            score: item.score,
            matchDate: new Date(item.date),
            heroes: item.heroes
        }))
    }
}