import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {

  @InjectRepository(User)
  private readonly repository: Repository<User>;

  constructor() {}

  public getUser(id: number): Promise<User> {    
    return this.repository.findOneBy({id});
  } 

  public removeUser(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.email = body.email;
    return this.repository.save(user);
  }
}
