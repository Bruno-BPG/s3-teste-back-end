import { Entity, Column, PrimaryColumn,CreateDateColumn,OneToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable } from "typeorm";

import { v4 as uuid } from "uuid"

import { Contatos } from './contatos.entity'


@Entity()

export class Cliente {

    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    telefone: string

    @CreateDateColumn()
    created_at: Date

    @OneToMany(() => Contatos,(contato)=>contato.clientee)
    contato: Contatos[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}