import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomersService } from 'src/services/customers/customers.service';
import { CreateCustomerDto } from 'src/services/customers/dtos/customer.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}
  @Get()
  getCustomers() {
    return this.customerService.findAll();
  }
  @Get('/:id')
  getCustomer(@Param('id') id: number) {
    return this.customerService.findOne(id);
  }
  @Post()
  createCustomer(@Body() payload: CreateCustomerDto) {
    return this.customerService.create(payload);
  }
  @Put('/:id')
  updateCustomer(@Param('id') id: number, @Body() payload: CreateCustomerDto) {
    return this.customerService.update(id, payload);
  }
  @Delete('/:id')
  deleteCustomer(@Param('id') id: number) {
    return this.customerService.remove(id);
  }
}
