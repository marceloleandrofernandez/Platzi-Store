import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  //ParseIntPipe,
} from '@nestjs/common';

import { ProductService } from 'src/services/product/product.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  @Get()
  getProducts(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('limit') limit = 25,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('offset') offset = 1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('brand') brand: string,
  ) {
    /* return {
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    }; */
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `Productos Filtrados`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    //return this.productsService.findOne(+productId); // autocasting precedido por el signo + en caso de no usar ParseIntPipe
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    /*   return {
      message: 'accion de crear',
      payload,
    }; */
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
