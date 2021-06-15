import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnswerController } from './answer/answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './orm.config';
import { User } from './answer/answer.entity';
import { AddressRepository, UserRepository } from './answer/answer.repository';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModel } from './auth/user.entity';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { getJWTConfig } from 'src/jwt.config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User, UserRepository, AddressRepository]), ConfigModule.forRoot(), 
  AuthModule, TypeOrmModule.forFeature([UsersModel]),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: getJWTConfig
}), PassportModule],
  controllers: [AppController, AnswerController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
