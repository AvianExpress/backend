import { IsNumber, IsString, MaxLength } from 'class-validator'
import { OneToOne } from 'typeorm';
import { User } from '../answer.entity';


export class postModelDto{
    @IsNumber()
    id?: number;
    @IsString()
    name: string;
    @IsString()
    surname: string;
    @IsNumber()
    phone: number;
    @IsNumber()
    addressID?: number;
    
}