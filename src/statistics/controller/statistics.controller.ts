import { Controller, Post, Body, Get } from '@nestjs/common';
import { StatisticService } from '../service/statistics.service';
import { Statistic } from '../schemas/statistics.schema';
import { ICreateStatisticsDto } from '../dto/statistics.dto';

@Controller('statistics')
export class StatisticController {
  constructor(
    private statisticService: StatisticService
  ) {}

  @Post()
  create(@Body() statistic: ICreateStatisticsDto): Promise<Statistic> {
    return this.statisticService.create(statistic);
  }

  @Get()
  getAll(): Promise<Statistic[]> {
    return this.statisticService.getAll();
  }
}
