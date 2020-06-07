import { Module } from '@nestjs/common';
import { StatisticsController } from './controller/statistics.controller';
import { StatisticsService } from './service/statistics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Statistics, StatisticsSchema } from './schemas/statistics.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Statistics.name, schema: StatisticsSchema }])],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
