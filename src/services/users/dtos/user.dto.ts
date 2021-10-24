import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
