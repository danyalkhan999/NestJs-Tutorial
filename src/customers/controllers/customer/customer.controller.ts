import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/DTOs/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomersService) { }
    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number, @Req() req: Request, @Res() res: Response) {
        const customer = this.customerService.findCustomersById(id);
        if(customer){
            res.status(200).send({data: customer})
        }else{
            res.status(403).send({error: "Id is not available."})
        }
    }

    @Get('search/:id')
    searchCustomersById(@Param('id', ParseIntPipe) id: number){
        const customer = this.customerService.findCustomersById(id);
        if(customer){
            return customer;
        }else{
            throw new HttpException('Record not available for this id', HttpStatus.BAD_REQUEST)
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto){
        // console.log(createCustomerDto);
        const res = this.customerService.addnewCustomers(createCustomerDto);
        if(res){
            return {message: "Successfully added new customer", res}
        }else{
            throw new HttpException("Error while adding customer to list", HttpStatus.BAD_REQUEST)
        }
    }

    @Get('')
    getAllCustomers(){
        let users = this.customerService.getAllCustomer();
        if(users){
            return users;
        }else{
            throw new HttpException("Unable to get the records", HttpStatus.BAD_REQUEST)
        }
    }
}
