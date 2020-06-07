import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Statistics } from '../schemas/statistics.schema';
import { ICreateStatisticsDto } from '../dto/statistics.dto';

@Injectable()
export class StatisticsService {
    constructor(@InjectModel(Statistics.name) private readonly statisticsModel: Model<Statistics>) {}

    async create(statistic: ICreateStatisticsDto): Promise<Statistics> {
        const createdStat = new this.statisticsModel(statistic);
        return createdStat.save();
    }

    async getAll(): Promise<Statistics[]> {
        return this.statisticsModel.find().exec();
    }
}
