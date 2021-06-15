import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getCustomRepository, Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { UsersModel } from './user.entity';
import { compare, genSalt, hash } from 'bcryptjs';
import { USER_NOT_FOUND_ERROR, WRONG_PASS_ERROR } from './auth.constants';
import { User } from 'src/answer/answer.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersModel) private readonly userModel: Repository<UsersModel>,
        private readonly jwtService: JwtService
    ){}
    async createUser(dto: AuthDto) {
        
        const salt = await genSalt(10);
        const newUser = new UsersModel();
        newUser.email = dto.login;
        newUser.passwordhash = await hash(dto.password, salt);
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

    async validateUser(email: string, password: string): Promise<Pick<UsersModel, 'email'>>{
        const user = await this.findUser(email);
        if (!user){
            throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
        }
        const isCorrectPass = await compare(password, user.passwordhash);
        if (!isCorrectPass){
            throw new UnauthorizedException(WRONG_PASS_ERROR);
        }
        return {email: user.email};
    }

    async login(email: string){
        const payload = {email};
        return{
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
