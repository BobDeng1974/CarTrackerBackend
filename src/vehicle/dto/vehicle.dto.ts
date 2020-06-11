import { IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';

export class CreateVehicleDto {
    @IsNotEmpty()
    @IsString()
    owner: string;

    @IsNotEmpty()
    carDate: Date;

    @IsNotEmpty()
    @IsString()
    carModel: string;

    @IsNotEmpty()
    @IsString()
    carNumber: string;

    @IsPhoneNumber('BG')
    phoneNumber: string;
}
