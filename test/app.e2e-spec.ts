import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { postModelDto } from 'src/answer/dto/postcreate.dto';

const testDto: postModelDto = {
  name: 'sfsd',
  surname: 'FSsdsdgdAF',
  phone: 9487586474,
  id: 1
}

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/resp/create (POST)', async () => {
    return request(app.getHttpServer())
      .post('/resp/create')
      .send(testDto)
      .expect(201)
      .then(({body}: request.Response) =>{
      createdId = body.id;  
      expect(createdId).toBeDefined
    });
  });


  it('/resp/create (POST)', async () => {
    return request(app.getHttpServer())
      .post('/resp/create')
      .send({...testDto, name: 123})
      .expect(400)
      .then(({body}: request.Response)=>{
       // console.log(body);
      })
  });


  it('/resp/:Id (GET)', async () => {
    return request(app.getHttpServer())
      .get('/resp/'+ createdId)
      .expect(200)
      .then(({ body }: request.Response) => {
        //console.log(body.id);
        expect(body).toBeDefined;
        
      });
  });

  it('/resp/:reqId (GET)', async () => {
    return request(app.getHttpServer())
      .get('/resp/'+ 2)
      .expect(404)
  }); 

});
