import { UserDto } from "./user.dto";
export declare class UserController {
    createUser(user: UserDto): UserDto;
    getUserById(id: number): number;
}
