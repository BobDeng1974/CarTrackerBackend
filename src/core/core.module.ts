import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './services/mongo-config/mongo-config.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useClass: MongoConfigService,
        }),
    ],
})
export class CoreModule {}
