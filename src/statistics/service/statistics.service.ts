import { Injectable } from '@nestjs/common';
import { Statistic } from '../schemas/statistics.schema';
import { ICreateStatisticsDto } from '../dto/statistics.dto';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { OutboundResponseIdentitySerializer } from './outbound.serializer';

@Injectable()
export class StatisticService {
  @Client({
    transport: Transport.MQTT,
    options: {
      hostname: process.env.MQTT_HOST,
      port: Number(process.env.MQTT_PORT),
      protocol: 'mqtt',
      serializer: new OutboundResponseIdentitySerializer(),
    },
  })
  private readonly client: ClientProxy;

  constructor(
    @InjectModel(Statistic)
    private readonly statisticModel: ReturnModelType<typeof Statistic>,
  ) {}

  async create(statistic: ICreateStatisticsDto): Promise<Statistic> {
    const createdStat = new this.statisticModel(statistic);
    this.client.send<string, string>(process.env.DTC_SERVICE_TOPIC, process.env.DTC_CODE).subscribe();
    return createdStat.save();
  }

  async getAll(
    skip: number,
    limit: number,
    vehicle: string,
  ): Promise<Statistic[]> {
    return this.statisticModel
      .find({ vehicle })
      .sort({ date: 'desc' })
      .skip(Number(skip))
      .limit(Number(limit))
      .exec();
  }
}
