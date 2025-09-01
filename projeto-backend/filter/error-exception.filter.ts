import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express";
import { ErrorResponseDTO } from "../error/dto/error-response.dto";

@Catch()
export class ErrorExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const dto = new ErrorResponseDTO();
    dto.statusCode = 500;
    dto.timestamp = new Date().toISOString();
    dto.path = request.url;
    dto.method = request.method;
    dto.message = [`${exception.message}`];

    response.status(dto.statusCode).json(dto);
  }
}
