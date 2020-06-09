import { Module } from '@nestjs/common';
import { VehicleController } from './controller/vehicle.controller';
import { VehicleService } from './service/vehicle.service';
import { Vehicle } from './schemas/vehicle.schema';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([Vehicle])],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
