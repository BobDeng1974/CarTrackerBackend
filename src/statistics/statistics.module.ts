import { Module } from '@nestjs/common';
import { StatisticController } from './controller/statistics.controller';
import { StatisticService } from './service/statistics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Statistic, StatisticSchema } from './schemas/statistics.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Statistic.name, schema: StatisticSchema }]),
  ],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticsModule {}
