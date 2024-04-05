import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/Index';

@Injectable()
export class UsersService {
    private users: User[] = [
        {   
            "id": 1, 
            "username": "mysticDragon83",
            "password": "p@ssw0rd123"
        },
        {   
            "id": 2,
            "username": "silverWing99",
            "password": "secreT&safe87"
        },
        {   
            "id": 3,
            "username": "blazingSunrise22",
            "password": "fire&Ice$567"
        },
        {   
            "id": 4,
            "username": "cosmicExplorer7",
            "password": "galaxyTr@veler66"
        },
        {   
            "id": 5,
            "username": "stealthyNinja55",
            "password": "shadowPa$$321"
        }
    ];

    getUsers(): User[]{
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string): User{
        return this.users.find((x) => x.username === username)
    }

    getUserById(id) : User {
        return this.users.find((x) => x.id === id);
    }
}
