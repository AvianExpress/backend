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

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User, UserRepository, AddressRepository]), AuthModule, TypeOrmModule.forFeature([UsersModel])],
  controllers: [AppController, AnswerController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
