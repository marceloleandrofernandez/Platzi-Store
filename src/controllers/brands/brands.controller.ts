import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BrandsService } from 'src/services/brands/brands.service';
import { CreateBrandDto } from 'src/services/brands/dtos/brands.dto';

@Controller('brands')
export class BrandsController {
  constructor(private categoriesService: BrandsService) {}
  @Get()
  getBrands() {
    return this.categoriesService.findAll();
  }
  @Get(':id')
  getBrand(@Param('id') id: number) {
    return this.categoriesService.findOne(id);
  }
  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    return this.categoriesService.create(payload);
  }
  @Put(':id')
  updateBrand(@Param('id') id: number, @Body() payload: CreateBrandDto) {
    return this.categoriesService.update(id, payload);
  }
  @Delete(':id')
  deleteBrand(@Param('id') id: number) {
    return this.categoriesService.remove(id);
  }
}
