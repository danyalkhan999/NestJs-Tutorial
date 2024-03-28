import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
    @IsOptional() @IsNumberString()
    id: number;

    @IsString() @IsNotEmpty()
    name: string;
    @IsNumber() @IsNotEmpty()
    age: number;

    @IsEmail() @IsNotEmpty()
    email: string;

    @IsNotEmptyObject() 
    @ValidateNested()
    @Type(()=> CreateAddressDto)
    address: CreateAddressDto;
}