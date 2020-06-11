import { prop, Ref, modelOptions } from '@typegoose/typegoose';
import { Vehicle } from '../../vehicle/schemas/vehicle.schema';

@modelOptions({ schemaOptions: { toJSON: { virtuals: true }, toObject: { virtuals: true } }})
export class Statistic {
    @prop({ required: true })
    date!: Date;

    @prop({ required: true })
    address!: string;

    @prop({ required: true })
    overspeed!: number;

    @prop({ required: true, ref: () => Vehicle })
    vehicle?: Ref<Vehicle>;
}
