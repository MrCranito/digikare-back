import { DeleteResult } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';
export declare class UsersService {
    private readonly repository;
    constructor();
    getUser(email: string): Promise<User>;
    removeUser(id: number): Promise<DeleteResult>;
    createUser(body: CreateUserDto): Promise<User>;
}
