import { prop, Ref, arrayProp, modelOptions } from '@typegoose/typegoose';
import { Statistic } from '../../statistics/schemas/statistics.schema';

@modelOptions({ schemaOptions: { toJSON: { virtuals: true }, toObject: { virtuals: true } }})
export class Vehicle {
    @prop({ required: true })
    owner: string;

    @prop({ required: true })
    carDate: Date;

    @prop({ required: true })
    carModel: string;

    @prop({ required: true, unique: true })
    carNumber: string;

    @prop({ required: true, unique: true })
    phoneNumber: string;

    @prop({
        ref: () => Statistic,
        foreignField: 'vehicle',
        localField: '_id'
    })
    statistics?: Array<Ref<Statistic>>;
}
