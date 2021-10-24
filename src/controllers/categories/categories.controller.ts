import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from 'src/services/categories/categories.service';
import { CreateCategoryDto } from 'src/services/categories/dtos/categories.dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id') id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() payload: CreateCategoryDto) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return this.categoriesService.remove(id);
  }
}
