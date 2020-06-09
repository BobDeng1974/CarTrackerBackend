import { Controller, Post, Body, Get } from '@nestjs/common';
import { VehicleService } from '../service/vehicle.service';
import { Vehicle } from '../schemas/vehicle.schema';

@Controller('vehicle')
export class VehicleController {
    constructor(private vehicleService: VehicleService) {}

    @Post()
    async add(@Body() vehicle: Vehicle): Promise<Vehicle> {
        return this.vehicleService.create(vehicle);
    }

    @Get()
    async getAll(): Promise<Vehicle[]> {
        return this.vehicleService.getAll();
    }
}
