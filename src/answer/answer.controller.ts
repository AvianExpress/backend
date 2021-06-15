import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Post, Query, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { addressDto } from './dto/address.dto';
import {postModelDto} from './dto/postcreate.dto'


  
@Controller('resp')
export class AnswerController {
    constructor(private  appService: AppService){}
    /*@Get(':id')
    async get(@Param('id') id: string){
        if (testDto.id !== +id){
            throw new NotFoundException('id not found')
        }  
        return testDto.id;
    }*/
    @Get()
    getAll() {
         return this.appService.All();
    }
    @Get(':id')
    getOne(@Param('id') id:number) {
         return this.appService.getOne(id);
    }

    @UsePipes(new ValidationPipe)
    @Post('create')
    async create(@Body() req: postModelDto){
        
        return this.appService.add(req);
    }

    @UsePipes(new ValidationPipe)
    @Post('createAddress')
    async createAddress(@Body() ads: addressDto){
        
        return this.appService.addAddress(ads);
    }
    @Delete(':id')
    async deleteUser(@Param('id') id:number){
        return this.appService.remove(id);
    }
}
//, @isNum('id') id: string, @isNum('phone') phone: string,@isStr('name') name: string, @isStr('surname') surname: string