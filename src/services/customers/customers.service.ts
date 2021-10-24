import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './dtos/customer.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Customer 1',
      lastName: 'Last Name 1',
      email: 'customer1@gmail.com',
      phone: '123456789',
      address: 'Address 1',
    },
  ];
  findAll(): Customer[] {
    return this.customers;
  }
  findOne(id: number): Customer {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new Error(`Customer #${id} not found`);
    }
    return customer;
  }
  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = { id: this.counterId, ...payload };
    this.customers.push(newCustomer);
    return newCustomer;
  }
  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    if (customerIndex === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers[customerIndex] = { ...customer, ...payload };
    return this.customers[customerIndex];
  }
  remove(id: number) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    if (customerIndex === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers.splice(customerIndex, 1);
    return true;
  }
}
