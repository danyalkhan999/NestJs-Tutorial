import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/Index';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            "username": "mysticDragon83",
            "password": "p@ssw0rd123"
        },
        {
            "username": "silverWing99",
            "password": "secreT&safe87"
        },
        {
            "username": "blazingSunrise22",
            "password": "fire&Ice$567"
        },
        {
            "username": "cosmicExplorer7",
            "password": "galaxyTr@veler66"
        },
        {
            "username": "stealthyNinja55",
            "password": "shadowPa$$321"
        }
    ];

    getUsers(){
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string){
        return this.users.find((x) => x.username === username)
    }
}
