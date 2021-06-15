import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    phone: number;
    @Column({nullable: true})
    addressID: number;
    @OneToOne(type => Address, address => address.user)
    @JoinColumn({name: "addressID"})
    address: Address;
}