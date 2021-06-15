import { Address } from './address.entity';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './answer.entity';
import { addressDto } from './dto/address.dto';
import { postModelDto } from './dto/postcreate.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  public async add(
    dto: postModelDto,
    add: User,
  ): Promise<User> {
    const { name, surname, phone, addressID} = dto;

    add.name = name;
    add.surname = surname;
    add.phone = phone;
    add.addressID = addressID;
    await this.save(dto);
    return add;
  }

}
@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{
    public async addAds(
        dtoAds: addressDto,
        add: Address,
      ): Promise<Address> {
        const { address} = dtoAds;
    
        add.address = address;
    
        await this.save(dtoAds);
        return add;
      }
}