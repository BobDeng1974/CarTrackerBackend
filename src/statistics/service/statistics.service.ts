import { Injectable, Logger } from '@nestjs/common';
import { Statistic } from '../schemas/statistics.schema';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { OutboundResponseIdentitySerializer } from './outbound.serializer';
import { CreateStatisticsDto } from '../dto/statistics.dto';

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
  private readonly logger = new Logger('DTC_MICROSERVICE');

  constructor(
    @InjectModel(Statistic)
    private readonly statisticModel: ReturnModelType<typeof Statistic>,
  ) {}

  async create(statistic: CreateStatisticsDto): Promise<Statistic> {
    const createdStat = new this.statisticModel(statistic);
    this.client.send<string, string>(process.env.DTC_SERVICE_TOPIC, process.env.DTC_CODE).subscribe({
      error: (error) => this.logger.error(error)
    });
    return createdStat.save();
  }
}
