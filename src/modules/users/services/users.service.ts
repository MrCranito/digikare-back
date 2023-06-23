import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {

  @InjectRepository(User)
  private readonly repository: Repository<User>;

  constructor() {}

  public async getUser(email: string): Promise<User> {

    // verify if user already exists
    // if user not exists throw error
    await this.repository.findOne({ where: { email }}).then((user) => {
      if (!user) {
        throw new HttpException({
          status:  HttpStatus.NOT_FOUND,
          error: "L'utilisateur n'existe pas",
        }, HttpStatus.NOT_FOUND );
      }
    })

    return this.repository.findOne(
      { where: { email }}
    );
  } 

  public removeUser(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.email = body.email;

    // verify if user already exists
    // if user exists throw error
    await this.repository.findOne({ where: { email: body.email }}).then((user) => {
      if (user) {
        throw new HttpException({
          status:  HttpStatus.UNPROCESSABLE_ENTITY,
          error: "L'utilisateur existe déjà",
        }, HttpStatus.UNPROCESSABLE_ENTITY );
      }
    })

    return this.repository.save(user);
  }
}
