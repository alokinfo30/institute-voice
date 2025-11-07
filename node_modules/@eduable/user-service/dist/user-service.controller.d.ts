import { UserServiceService } from './user-service.service';
export declare class UserServiceController {
    private readonly userService;
    constructor(userService: UserServiceService);
    findByEmail(data: {
        email: string;
    }): Promise<import("./entities/user.entity").User | null>;
    findById(data: {
        id: string;
    }): Promise<import("./entities/user.entity").User>;
    create(data: any): Promise<import("./entities/user.entity").User>;
    update(data: {
        id: string;
        updateData: any;
    }): Promise<import("./entities/user.entity").User>;
    delete(data: {
        id: string;
    }): Promise<void>;
    validateUser(data: {
        email: string;
        password: string;
    }): Promise<import("./entities/user.entity").User | null>;
}
