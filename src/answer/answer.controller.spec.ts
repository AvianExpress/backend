import { Test, TestingModule } from '@nestjs/testing';
import { request } from 'express';
import { AnswerController } from './answer.controller';

describe('Answer1Controller', () => {
  let controller: AnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerController],
    }).compile();

    controller = module.get<AnswerController>(AnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should i die?', async()=>{
    //без моков вынести отдельные функции логики и их проверять ахахахахахах что?в сервисе всякую гадость?

  })
});
