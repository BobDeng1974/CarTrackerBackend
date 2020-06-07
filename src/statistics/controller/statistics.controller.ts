import { Controller, Post, Body, Get } from '@nestjs/common';
import { StatisticsService } from '../service/statistics.service';
import { Statistics } from '../schemas/statistics.schema';
import { ICreateStatisticsDto } from '../dto/statistics.dto';

@Controller('statistics')
export class StatisticsController {
    constructor(private statisticsService: StatisticsService) {}

    @Post()
    create(@Body() statistic: ICreateStatisticsDto): Promise<Statistics> {
        return this.statisticsService.create(statistic);
    }

    @Get()
    getAll(): Promise<Statistics[]> {
        return this.statisticsService.getAll();
    }
}
