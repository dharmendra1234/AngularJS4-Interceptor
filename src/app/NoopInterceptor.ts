import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { HttpResponse } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({headers: req.headers.set('Authorization',  localStorage.getItem('token'))});

    return next.handle(authReq)
  // .do(events => {
  //     if (envents instanceof HttpResponse) {
  //       console.log('---> log the status:', events.status);
  //    
  //     }
  //   })
  .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Processing http error', response);
        }
        return Observable.throw(response);
      });
  }
}

  

