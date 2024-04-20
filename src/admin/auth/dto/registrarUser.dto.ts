import { IsEmail, IsString, Min } from "class-validator";

export class RegistrarUserDTO{
	@IsString()
	nome: string;

	@IsString()
	@IsEmail()
	email: string;

	// @IsStrongPassword()
	@IsString()
	@Min(6)
	senha: string
}