import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegistrarUserDTO } from './dto/registrarUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	@Inject()
	private readonly authService: AuthService;

	@Post('')
	login(){}

	@Post('registrar')
	registrar(@Body() registrarUserDTO: RegistrarUserDTO){
		return this.authService.registrar(registrarUserDTO);
	}
}
