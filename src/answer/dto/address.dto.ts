import { IsNumber, IsString } from 'class-validator'


export class addressDto{
    @IsNumber()
    id: number;
    @IsString()
    address: string;
    
}