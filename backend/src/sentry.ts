import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { catchError, Observable, throwError } from 'rxjs';

export function initSentry(dsn: string) {
  Sentry.init({
    dsn,
    integrations: [nodeProfilingIntegration()],
    tracesSampleRate: 1.0,
  });
}

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        // Отправляем в Sentry только ошибки с кодом статуса 500 и TypeError
        if (error instanceof HttpException && error.getStatus() === 500) {
          console.log('error');
          Sentry.captureException(error);
        } else if (error instanceof TypeError) {
          Sentry.captureException(error);
        }
        return throwError(() => error);
      }),
    );
  }
}
