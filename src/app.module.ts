import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [
    CoreModule,
    StatisticsModule,
  ]
})
export class AppModule {}
