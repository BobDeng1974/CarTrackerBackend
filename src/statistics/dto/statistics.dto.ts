import { IsString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateStatisticsDto {

    @IsNotEmpty()
    readonly date: Date;

    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    readonly overspeed: number;

    @IsString()
    @IsNotEmpty()
    readonly vehicle: string;
}
