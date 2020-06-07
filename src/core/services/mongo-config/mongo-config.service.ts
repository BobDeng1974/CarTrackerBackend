import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions  } from '@nestjs/mongoose';

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        return {
          uri: 'mongodb://localhost/car-tracker',
        };
    }
}
