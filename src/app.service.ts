import { Injectable } from '@nestjs/common';
import { User } from './answer/answer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { postModelDto } from './answer/dto/postcreate.dto';
import { addressDto } from './answer/dto/address.dto';
import { Address } from './answer/address.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private readonly repo:Repository<User>, @InjectRepository(Address) private readonly repoADS:Repository<Address>,){}
  getHello(): string {
    return 'Hello World!';
  };
  add(dto: postModelDto) {
    return  this.repo.save(dto);
  };
  addAddress(adsDto: addressDto) {
    return  this.repoADS.save(adsDto);
  };
  getAll(){
      const user = this.repo.find({relations: ["address"]});
      return user;
  };
  async All(){
    //return await getRepository(User).createQueryBuilder("user").leftJoinAndSelect("address", "address", "address.addressID = user.address").getMany();
    return await getRepository(User).createQueryBuilder("user").leftJoinAndSelect("user.address", "address").select(["id", "name, address"]).getRawMany();
  };
  async getOne(id: number){
    //return this.repo.findOne(id, {relations: ["address"]});
    return await getRepository(User).createQueryBuilder("user").leftJoinAndSelect("user.address", "address").where("user.id = :id", {id:id}).getOne();
  };
  async remove(id: number){
    let userToRemove = await this.repo.findOne(id);
    return await this.repo.remove(userToRemove);
  }
}

