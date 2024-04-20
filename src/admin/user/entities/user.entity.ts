import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User{
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	nome: string;

	@Column()
	email: string;

	@Column()
	senha: string;

	@BeforeInsert()
  async hashPassword(){
    this.senha = await bcrypt.hash(this.senha, 10);
  }
}

