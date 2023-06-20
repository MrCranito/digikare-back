import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    get(params: any): Promise<User>;
    create(body: CreateUserDto): Promise<User>;
    remove(params: any): Promise<DeleteResult>;
}
