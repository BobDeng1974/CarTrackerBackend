import { IsString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class ICreateStatisticsDto {

    @IsNotEmpty()
    readonly date: Date;

    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @IsString()
    @IsNotEmpty()
    readonly carData: string;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    readonly overspeed: number;

    @IsString()
    @IsNotEmpty()
    readonly vehicle: string;
}
