import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Vehicle } from '../schemas/vehicle.schema';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateVehicleDto } from '../dto/vehicle.dto';
import * as Pusher from 'pusher';

const pusher = new Pusher({
    appId: '613693',
    key: '1f420441a89d17034c56',
    secret: '28ae3191a367fd354ade',
    cluster: 'eu',
    useTLS: true
  });
@Injectable()
export class VehicleService {
    constructor(
        @InjectModel(Vehicle)
        private readonly vehicleModel: ReturnModelType<typeof Vehicle>
      ) {}

    async create(vehicle: CreateVehicleDto): Promise<Vehicle> {
        const createdStat = new this.vehicleModel(vehicle);
        return createdStat.save();
    }

    async getAll(): Promise<Vehicle[]> {
        return await this.vehicleModel.find().exec();
    }

    async getStatisticsByVehicle(vehicleId: string, skip: string, limit: string): Promise<Vehicle> {
        return await this.vehicleModel.findOne({ _id: vehicleId }).populate({
            path: 'statistics',
            options: {
                skip: Number(skip),
                limit: Number(limit),
                sort: { date: 'desc'}
            }
        }).exec();
    }

    sendLocation(location: any): void {
        pusher.trigger('vehicle', 'vehicle_location', location);
    }
}
