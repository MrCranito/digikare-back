import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  getUser(): string {
    return 'This action returns all cats';
  } 

  removeUser(): string {
    return 'This action removes a cat';
  }

  createUser(): string {
    return 'This action updates a cat';
  }
}
