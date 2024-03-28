import { IsAlphanumeric, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty() @IsString()
    line1: string;
    line2:string;
    @IsNotEmpty() @IsString()
    city: string;
    @IsNotEmpty() @IsString()
    country: string;
    @IsNotEmpty() @IsNumberString()
    pincode: number;
}