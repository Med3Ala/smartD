import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    const accessToken = localStorage.getItem("jwtToken")
    //console.log(accessToken)
    req = req.clone({
      setHeaders: {
        Authorization: `JWT ${accessToken}`,
        // 'Access-Control-Request-Method' : 'POST',
      }
    });
    return next.handle(req).pipe(catchError(x => this.handleAuthError(x)));

  }

  private handleAuthError(err: HttpErrorResponse): Observable < any > {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      //navigate /delete cookies or whatever
      console.log("redirection")
      //this.router.navigate(['/auth'])
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message); // or EMPTY may be appropriate here
    }
    return new Observable < any > ()
  }
}
