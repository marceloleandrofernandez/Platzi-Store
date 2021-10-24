import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductService } from './services/product/product.service';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    UsersController,
    CustomersController,
  ],
  providers: [
    AppService,
    ProductService,
    CustomersService,
    CategoriesService,
    BrandsService,
    UsersService,
  ],
})
export class AppModule {}
