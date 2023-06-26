import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class HttpExceptionEmailFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
