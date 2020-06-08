import { Controller, Post, Body, Get, Query, ValidationPipe } from '@nestjs/common';
import { StatisticService } from '../service/statistics.service';
import { Statistic } from '../schemas/statistics.schema';
import { ICreateStatisticsDto } from '../dto/statistics.dto';

@Controller('statistics')
export class StatisticController {
  constructor(
    private statisticService: StatisticService
  ) {}

  @Post()
  create(@Body(new ValidationPipe()) statistic: ICreateStatisticsDto): Promise<Statistic> {
    return this.statisticService.create(statistic);
  }

  @Get()
  getAll(@Query('skip') skip: number, @Query('limit') limit: number): Promise<Statistic[]> {
    return this.statisticService.getAll(skip, limit);
  }
}
