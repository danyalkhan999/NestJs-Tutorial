import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        const status = exception.getStatus();

        response
            .send({status: status, message: exception.getResponse()})
            
    }
}