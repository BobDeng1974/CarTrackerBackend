import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Statistic } from '../schemas/statistics.schema';
import { ICreateStatisticsDto } from '../dto/statistics.dto';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';

@Injectable()
export class StatisticService {
  @Client({
    transport: Transport.MQTT,
    options: { hostname: process.env.MQTT_HOST, port: Number(process.env.MQTT_PORT), protocol: 'mqtt' },
  })
  private readonly client: ClientProxy;

  constructor(
    @InjectModel(Statistic.name)
    private readonly statisticModel: Model<Statistic>
  ) {}

  async create(statistic: ICreateStatisticsDto): Promise<Statistic> {
    const createdStat = new this.statisticModel(statistic);
    this.client.send('/dtc', 'DARKO TEST1');
    return createdStat.save();
  }

  async getAll(): Promise<Statistic[]> {
    return this.statisticModel.find().exec();
  }
}
