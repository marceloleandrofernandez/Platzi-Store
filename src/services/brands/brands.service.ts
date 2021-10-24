import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from 'src/entities/brand.entity.dto';
import { CreateBrandDto, UpdateBrandDto } from './dtos/brands.dto';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private readonly brands: Brand[] = [
    {
      id: 1,
      name: 'Apple',
      image:
        'https://www.apple.com/v/home/am/images/hero/apple_hero_iphone_x_2x.png',
    },
  ];
  findAll(): Brand[] {
    return this.brands;
  }
  findOne(id: number): Brand {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }
  create(payload: CreateBrandDto) {
    this.counterId++;
    const newBrand: Brand = { id: this.counterId, ...payload };
    this.brands.push(newBrand);
    return newBrand;
  }
  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    const brandIndex = this.brands.indexOf(brand);
    if (brandIndex === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands[brandIndex] = { ...brand, ...payload };
    return this.brands[brandIndex];
  }
  remove(id: number) {
    const brandIndex = this.brands.findIndex((brand) => brand.id === id);
    if (brandIndex === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(brandIndex, 1);
    return this.brands;
  }
}
