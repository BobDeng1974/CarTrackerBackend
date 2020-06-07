import { Document } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema()
export class Statistics extends Document {
    @Prop({ required: true })
    date: Date;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    carData: string;

    @Prop({ required: true })
    overspeed: number;
}

export const StatisticsSchema = SchemaFactory.createForClass(Statistics);
