import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/DTOs/CreateCustomer.dto';

@Injectable()
export class CustomersService {
    users = [
        {
            id: 1,
            name: 'John Doe',
            age: 30,
            email: 'john@example.com',
            address: {
                line1: '123 Main St',
                line2: 'Apt 101',
                city: 'New York',
                country: 'USA',
                pincode: 10001
            }
        },
        {
            id: 2,
            name: 'Alice Smith',
            age: 25,
            email: 'alice@example.com',
            address: {
                line1: '456 Elm St',
                line2: '',
                city: 'Los Angeles',
                country: 'USA',
                pincode: 90001
            }
        },
        {
            id: 3,
            name: 'Bob Johnson',
            age: 40,
            email: 'bob@example.com',
            address: {
                line1: '789 Oak St',
                line2: 'Suite 200',
                city: 'Chicago',
                country: 'USA',
                pincode: 60601
            }
        },
        {
            id: 4,
            name: 'Emma Brown',
            age: 35,
            email: 'emma@example.com',
            address: {
                line1: '101 Pine St',
                line2: '',
                city: 'Houston',
                country: 'USA',
                pincode: 77002
            }
        },
        {
            id: 5,
            name: 'Michael Wilson',
            age: 28,
            email: 'michael@example.com',
            address: {
                line1: '222 Maple St',
                line2: 'Unit B',
                city: 'San Francisco',
                country: 'USA',
                pincode: 94103
            }
        }
    ];

    findCustomersById(id: Number): object {
        return this.users.find((user) => user.id === id);
    }

    addnewCustomers(customerData: CreateCustomerDto) {
        let count = this.users.length;
        customerData['id'] = count + 1;
        this.users.push(customerData)
        return customerData;
    }
    getAllCustomer() {
        return this.users;
    }
}
