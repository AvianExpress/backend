import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersModel{
    @PrimaryGeneratedColumn()
    _id: number;
    @Column({unique: true})
    email: string;
    @Column()
    passwordhash: string;
}