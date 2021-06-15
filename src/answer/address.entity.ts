import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./answer.entity";

@Entity()
export class Address{
    @PrimaryGeneratedColumn()
    addressID: number;
    @Column()
    address: string;
    @OneToOne(type=>User, user => user.address)
    @JoinColumn()
    user: User;
}