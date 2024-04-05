import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {

    use(req: any, res: any, next: NextFunction) {
        console.log("Hello World!, We are inside the middleware");
        const {authorization} = req.headers;
        if(!authorization){
            return res.status(403).send({error: "No authorization token provided."})
        }
        if(authorization !== '12345'){
            return res.status(403).send({error: "Invalid authorization token."})
        }
        next();
    }
}