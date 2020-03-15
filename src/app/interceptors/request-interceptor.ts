import { Observable } from 'rxjs';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        request = request.clone({
            headers: new HttpHeaders({
                // 'Cache-Control': 'no-cache',
                // Pragma: 'no-cache',
                // Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
            })
        });

        return next.handle(request);
    }
}
