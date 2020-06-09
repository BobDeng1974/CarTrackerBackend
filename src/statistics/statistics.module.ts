import { Module } from '@nestjs/common';
import { StatisticController } from './controller/statistics.controller';
import { StatisticService } from './service/statistics.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Statistic } from './schemas/statistics.schema';

@Module({
  imports: [
    TypegooseModule.forFeature([Statistic]),
  ],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticsModule {}
