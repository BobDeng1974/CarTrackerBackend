export interface ICreateStatisticsDto {
    readonly date: Date;
    readonly address: string;
    readonly carData: string;
    readonly overspeed: number;
}
