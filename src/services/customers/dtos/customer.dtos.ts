import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { CreateProductDto } from 'src/services/product/dtos/product.dto';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('ES')
  readonly phone: string;
  @IsNotEmpty()
  @IsString()
  readonly address: string;
}

export class UpdateCustomerDto extends PartialType(CreateProductDto) {}
