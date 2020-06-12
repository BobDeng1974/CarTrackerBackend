import { Injectable, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Vehicle } from '../schemas/vehicle.schema';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateVehicleDto } from '../dto/vehicle.dto';
import * as Pusher from 'pusher';
import { LoginVehicleDto } from '../dto/login-vehicle.dto';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHE_CLUSTER,
  useTLS: true,
});
@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle)
    private readonly vehicleModel: ReturnModelType<typeof Vehicle>,
  ) {}

  async create(vehicle: CreateVehicleDto): Promise<Vehicle> {
    const createdStat = new this.vehicleModel(vehicle);
    return createdStat.save();
  }

  async getAll(): Promise<Vehicle[]> {
    return await this.vehicleModel.find().exec();
  }

  async loginVehicle(vehicle: LoginVehicleDto): Promise<Vehicle> {
    const foundVehicle = await this.vehicleModel.findOne({ carNumber: vehicle.carNumber }).exec();

    if (!foundVehicle) {
      throw new BadRequestException('Requested vehicle does not exist!');
    }

    return foundVehicle;
  }

  async getStatisticsByVehicle(
    vehicleId: string,
    skip: string,
    limit: string,
  ): Promise<Vehicle> {
    return await this.vehicleModel
      .findOne({ _id: vehicleId })
      .populate({
        path: 'statistics',
        options: {
          skip: Number(skip),
          limit: Number(limit),
          sort: { date: 'desc' },
        },
      })
      .exec();
  }

  sendLocation(location: any): void {
    pusher.trigger(process.env.PUSHER_CHANNEL, process.env.PUSHER_EVENT, location);
  }
}
