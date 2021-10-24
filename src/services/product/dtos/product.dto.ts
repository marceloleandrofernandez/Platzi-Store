import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;
  @IsString()
  @IsNotEmpty()
  readonly description?: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price?: number;
  @IsNumber()
  @IsNotEmpty()
  readonly stock?: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image?: string;
}
