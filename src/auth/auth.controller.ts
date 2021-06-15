import { BadRequestException, Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ALREDY_REGISTRED } from './auth.constants';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() dto: AuthDto){
        const oldUser = await this.authService.findUser(dto.login);
        if (oldUser){
            throw new BadRequestException(ALREDY_REGISTRED);
        }
        return this.authService.createUser(dto);
    }

    @Post('login')
    async login(@Body() dto: AuthDto){

    }
}
