import { Injectable } from '@nestjs/common';
import { RegistrarUserDTO } from './dto/registrarUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
	@InjectRepository(User)
	private readonly userRepository: Repository<User>

	async registrar(registrarUserDTO: RegistrarUserDTO){
		const user = this.userRepository.create(registrarUserDTO);
		return await this.userRepository.save(user);
	}
}
