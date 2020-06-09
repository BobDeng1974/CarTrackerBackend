import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './services/mongo-config/mongo-config.service';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    ConfigModule.forRoot()
  ]
})
export class CoreModule {}
