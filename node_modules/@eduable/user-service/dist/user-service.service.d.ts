import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserServiceService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User>;
    create(userData: Partial<User>): Promise<User>;
    update(id: string, updateData: Partial<User>): Promise<User>;
    delete(id: string): Promise<void>;
    validateUser(email: string, password: string): Promise<User | null>;
}
