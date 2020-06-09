import { Injectable } from '@nestjs/common';
import { TypegooseOptionsFactory, TypegooseModuleOptions } from 'nestjs-typegoose';

@Injectable()
export class MongoConfigService implements TypegooseOptionsFactory {
    createTypegooseOptions(): TypegooseModuleOptions {
        return {
          uri: process.env.MONG_DB_URI,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
        };
    }
}
