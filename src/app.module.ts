import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { StatisticsModule } from './statistics/statistics.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    CoreModule,
    StatisticsModule,
    VehicleModule,
  ]
})
export class AppModule {}
