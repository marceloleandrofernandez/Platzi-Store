import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 25,
    @Query('offset') offset = 1,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `Productos Filtrados`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }
}
