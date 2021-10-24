import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/services/users/dtos/user.dto';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.findAll();
  }
  @Get(':userId')
  getOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.findOne(userId);
  }
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
  @Put(':userId')
  update(@Param('userId') userId: number, @Body() user: UpdateUserDto) {
    return this.userService.update(userId, user);
  }
  @Delete(':userId')
  delete(@Param('userId') userId: number) {
    return this.userService.remove(+userId);
  }
}
