import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BaseError } from "../error/base-error";
import { Request, Response } from "express";
import { ErrorResponseDTO } from "../error/dto/error-response.dto";

@Catch(BaseError)
export class BaseErrorFilter implements ExceptionFilter {
  catch(exception: BaseError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const dto = new ErrorResponseDTO();
    dto.statusCode = exception.status;
    dto.timestamp = new Date().toISOString();
    dto.path = request.url;
    dto.method = request.method;
    dto.code = exception.code;
    dto.message = [exception.message];
    response.status(dto.statusCode).json(dto);
  }
}
