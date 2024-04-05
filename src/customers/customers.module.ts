import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customers.middleware';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account.middleware';
import { NextFunction } from 'express';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(ValidateCustomerMiddleware, (req: Request, res: Response, next: NextFunction) => {
          console.log("Function type middleware.");
          next();
        })
        // for particular routes
        // .forRoutes(
        //   {path: 'customer/search/:id', method : RequestMethod.GET},
        //   {path: 'customer/:id', method : RequestMethod.GET}
        // )

        .exclude({path: 'customer/:id', method: RequestMethod.GET})
        .forRoutes(CustomerController) // for complete controller
      
      consumer
        //another middleware
        .apply(ValidateCustomerAccountMiddleware)
        .exclude({path: 'customer/create', method: RequestMethod.POST})
        .forRoutes(CustomerController)

    }
}
