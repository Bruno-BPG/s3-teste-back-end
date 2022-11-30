import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn,OneToMany, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable } from "typeorm";

import { v4 as uuid } from "uuid"

import { Cliente } from './cliente.entity'

@Entity()

export class Contatos {

    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    telefone: string

    @ManyToOne(() => Cliente)
    clientee: Cliente

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}