import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  get(@Param() params: any): string {
    return this.usersService.getUser(params.id);
  }

  @Post()
  create(): string {
    return this.usersService.createUser();
  }

  @Delete(':id')
  remove(@Param() params: any): string {
    return this.usersService.removeUser(params.id);
  }
}