import {
  Controller,
  Post,
  Body,
  ValidationPipe
} from '@nestjs/common';
import { StatisticService } from '../service/statistics.service';
import { Statistic } from '../schemas/statistics.schema';
import { CreateStatisticsDto } from '../dto/statistics.dto';

@Controller('statistics')
export class StatisticController {
  constructor(private statisticService: StatisticService) {}

  @Post()
  create(
    @Body(new ValidationPipe()) statistic: CreateStatisticsDto,
  ): Promise<Statistic> {
    return this.statisticService.create(statistic);
  }
}
