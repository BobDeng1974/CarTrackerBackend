import { Controller, Post, Body, Get, Query, ValidationPipe, HttpCode } from '@nestjs/common';
import { VehicleService } from '../service/vehicle.service';
import { Vehicle } from '../schemas/vehicle.schema';
import { CreateVehicleDto } from '../dto/vehicle.dto';
import { LoginVehicleDto } from '../dto/login-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Post()
  async add(@Body(new ValidationPipe()) vehicle: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.create(vehicle);
  }

  @Post('/location')
  pushLocation(@Body() location: any): void {
    this.vehicleService.sendLocation(location);
  }

  @Post('/login')
  @HttpCode(200)
  async loginVehicle(@Body(new ValidationPipe()) vehicle: LoginVehicleDto): Promise<Vehicle> {
    return this.vehicleService.loginVehicle(vehicle);
  }

  @Get()
  async getAll(): Promise<Vehicle[]> {
    return this.vehicleService.getAll();
  }

  @Get('/stats')
  async getStats(
    @Query('vehicleId') vehicleId: string,
    @Query('skip') skip: string,
    @Query('limit') limit: string
  ): Promise<Vehicle> {
    return this.vehicleService.getStatisticsByVehicle(vehicleId, skip, limit);
  }
}
