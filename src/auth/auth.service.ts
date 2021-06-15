import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getCustomRepository, Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { UsersModel } from './user.entity';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersModel) private readonly userModel: Repository<UsersModel>
    ){}
    async createUser(dto: AuthDto) {
        
        const salt = genSaltSync(10);
        const newUser = new UsersModel();
        newUser.email = dto.login;
        newUser.passwordhash = hashSync(dto.password, salt);
        /*console.log(newUser);
        const newUser = getCustomRepository(UsersModel);
        //newUser._id = 1;
        newUser.email = dto.login;
        newUser.passwordhash = hashSync(dto.password, salt);
        
        //await this.save(add);*/
        await this.userModel.save(newUser);
        //this.save();
        return newUser;
    }


    async findUser(email: string){
        return this.userModel.findOne({email});
    }
}
