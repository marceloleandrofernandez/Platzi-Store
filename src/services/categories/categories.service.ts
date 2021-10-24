import { Injectable } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';
import { CreateCategoryDto } from './dtos/categories.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Computers',
    },
  ];
  findAll(): Category[] {
    return this.categories;
  }
  findOne(id: number): Category {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw new Error(`Category #${id} not found`);
    }
    return category;
  }
  create(payload: CreateCategoryDto) {
    this.counterId++;
    const newCategory = { id: this.counterId, ...payload };
    this.categories.push(newCategory);
    return newCategory;
  }
  update(id: number, payload: CreateCategoryDto) {
    const category = this.findOne(id);
    const categoryIndex = this.categories.indexOf(category);
    if (categoryIndex === -1) {
      throw new Error(`Category #${id} not found`);
    }
    this.categories[categoryIndex] = { ...category, ...payload };
    return this.categories[categoryIndex];
  }
  remove(id: number) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );
    if (categoryIndex === -1) {
      throw new Error(`Category #${id} not found`);
    }
    this.categories.splice(categoryIndex, 1);
    return true;
  }
}
