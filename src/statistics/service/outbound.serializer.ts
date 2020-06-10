import { Serializer, OutgoingResponse } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

export class OutboundResponseIdentitySerializer implements Serializer {
  private readonly logger = new Logger('OutboundResponseIdentitySerializer');
  serialize(value: any): OutgoingResponse {
    this.logger.log(`DTC Code sent: ${value.data}`);
    return value.data;
  }
}
