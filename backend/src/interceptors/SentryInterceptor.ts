import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import * as Sentry from '@sentry/nestjs';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        // Отправляем в Sentry только ошибки с кодом статуса 500 и TypeError
        if (error instanceof HttpException && error.getStatus() === 500) {
          Sentry.captureException(error);
        } else if (error instanceof TypeError) {
          Sentry.captureException(error);
        }
        return throwError(() => error);
      }),
    );
  }
}
