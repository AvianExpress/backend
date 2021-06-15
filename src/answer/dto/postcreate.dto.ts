import { IsNumber, IsString, MaxLength } from 'class-validator'
import { isNum } from '../answer.decorators';


export class postModelDto{
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsString()
    surname: string;
    @IsNumber()
    phone: number;
    @IsNumber()
    addressID: number;
    
}