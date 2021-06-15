import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModel } from './user.entity';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { getJWTConfig } from 'src/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
    controllers: [AuthController],
    imports: [TypeOrmModule.forFeature([UsersModel]), JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: getJWTConfig
    }), ConfigModule.forRoot()],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
