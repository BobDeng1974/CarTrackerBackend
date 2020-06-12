import { IsString, IsNotEmpty } from 'class-validator';

export class LoginVehicleDto {
    @IsString()
    @IsNotEmpty()
    carNumber: string;
}
