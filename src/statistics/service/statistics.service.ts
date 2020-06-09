import { Injectable } from '@nestjs/common';
import { Statistic } from '../schemas/statistics.schema';
import { ICreateStatisticsDto } from '../dto/statistics.dto';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class StatisticService {
  @Client({
    transport: Transport.MQTT,
    options: { hostname: process.env.MQTT_HOST, port: Number(process.env.MQTT_PORT), protocol: 'mqtt' },
  })
  private readonly client: ClientProxy;

  constructor(
    @InjectModel(Statistic)
    private readonly statisticModel: ReturnModelType<typeof Statistic>
  ) {}

  async create(statistic: ICreateStatisticsDto): Promise<Statistic> {
    const createdStat = new this.statisticModel(statistic);
    this.client.send('/dtc', 'DARKO TEST1');
    return createdStat.save();
  }

  async getAll(skip: number, limit: number): Promise<Statistic[]> {
    return this.statisticModel.find().skip(Number(skip)).limit(Number(limit)).exec();
  }
}
