import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dtos/product.dto';
@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'zapatillas',
      description: 'asdasd',
      price: 20.5,
      stock: 10,
      image: 'urlDeLaImagen',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw new NotFoundException(`No se encontrĂ³ el id ${id}`);
    }
    return product;
  }
  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id == id);
    this.products[index] = { ...product, ...payload };
    return this.products[index];
  }
  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
    /* const productFinded = this.findOne(id);
    if (productFinded) {
      this.products = this.products.filter((p: Product) => p.id !== id);
    }
    return { success: productFinded }; */
  }
}
