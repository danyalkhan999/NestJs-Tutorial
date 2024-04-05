import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, NotFoundException, Param, ParseIntPipe, UseFilters, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/User-Not-Found.exception';
import { HttpExceptionFilter } from 'src/users/filters/HTTPException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/Index';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers(){
        return this.userService.getUsers();
    }
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get("/username/:username")
    getUserByUsername(@Param('username') username: string){
        const user = this.userService.getUserByUsername(username);
        if(user){
            return new SerializedUser(user);
        }
        else{
            throw new HttpException("User Not Found", HttpStatus.BAD_REQUEST)
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get("id/:id")
    getUserById(@Param('id', ParseIntPipe) id:number){
        const user = this.userService.getUserById(id);
        console.log("iser", user);
        if(user){
            return new SerializedUser(user);
        }else{
            throw new UserNotFoundException();
            // throw new UserNotFoundException(`No user is available with id ${id}`, 403);
            // throw new NotFoundException();
        }
    }
    
}
