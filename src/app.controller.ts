import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.MQTT,
    options: { hostname: '78.83.158.151', port: 1833, protocol: 'mqtt' },
  })
  client: ClientProxy;
  @Get()
  async getHello(): Promise<any> {
    const resp = await this.client.send('dtc', 'DARKO TEST').toPromise();
    return resp;
  }
}
