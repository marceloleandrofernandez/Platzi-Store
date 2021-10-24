import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      username: 'juan69Goku',
      email: 'juan@gmail.com',
      password: '123456',
      avatar: 'http://miavatar.com/av-1.png',
    },
  ];
  findAll(): User[] {
    return this.users;
  }
  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((user) => user.id == id);
    if (index === -1) {
      throw new NotFoundException(`User ${id} not found`);
    }
    this.users[index] = { ...user, ...payload };
    return this.users[index];
  }
  remove(id: number) {
    const user = this.findOne(id);
    const index = this.users.findIndex((user) => user.id == id);
    console.log(typeof user);
    console.log(typeof index);
    if (index === -1) {
      throw new NotFoundException(`User ${id} not found`);
    }
    this.users.splice(index, 1);
    return user;
  }
}
