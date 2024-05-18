import { IsNumber, IsOptional, IsString } from "class-validator";

export class AllTaskDto {
    @IsNumber()
    id: number

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    date: string;

    @IsString()
    hour: string;

    @IsString()
    state: string;

    @IsString()
    @IsOptional()
    createAt: string;

    @IsString()
    createBy: string;

    @IsString()
    idinstitucion: string;


}