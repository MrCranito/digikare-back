import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  get(@Param() params: any): Promise<User> {
    return this.usersService.getUser(params.id);
  }

  @Post()
  create(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }

  @Delete(':id')
  remove(@Param() params: any): Promise<DeleteResult> {
    return this.usersService.removeUser(params.id);
  }
}