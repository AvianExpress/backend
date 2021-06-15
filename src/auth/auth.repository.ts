import { genSaltSync, hashSync } from "bcryptjs";
import { EntityRepository, Repository } from "typeorm";
import { AuthDto } from "./dto/auth.dto";
import { UsersModel } from "./user.entity";

@EntityRepository(UsersModel)
export class AuthRepository extends Repository<UsersModel>
{
    async createUser(dto: AuthDto, add: UsersModel): Promise<UsersModel> {
        const {login, password} = dto;
        const salt = genSaltSync(10);
        //const newUser = getCustomRepository(UsersModel);
        add.email = dto.login;
        add.passwordhash = hashSync(dto.password, salt);
        await this.save(add);
        return add;
    }
}