import { Injectable, NestMiddleware } from "@nestjs/common";
import { Console } from "console";
import { NextFunction } from "express";

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
    use(req: any, res: any, next: NextFunction) {
        console.log("we are inside ValidateCustmerAccountMiddleware");
        const {valid} = req.headers;
        if(!valid) return res.status(403).send({error: "Invalid Account"});
        next();
    }
}