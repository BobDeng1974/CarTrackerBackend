import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Vehicle } from '../schemas/vehicle.schema';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class VehicleService {
    constructor(
        @InjectModel(Vehicle)
        private readonly vehicleModel: ReturnModelType<typeof Vehicle>
      ) {}

    async create(vehicle: Vehicle): Promise<Vehicle> {
        const createdStat = new this.vehicleModel(vehicle);
        return createdStat.save();
    }

    async getAll(): Promise<Vehicle[]> {
        return await this.vehicleModel.find().exec();
    }
}
