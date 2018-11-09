import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Dish } from 'app/core/interfaces/dish';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private _url = '/assets/mockinfo/mockdish.json';

  constructor(private _http: HttpClient) { }

  addDish (dish: Dish): Observable<Dish> {
    return this._http.post<Dish>(this._url, dish, httpOptions)
          .pipe(
            catchError(this.handleError)
          )

  }

  deleteDish(id: number): Observable<{}> {
    const _url ='${this._url}/${id}'; // delete dishes/id
    return this._http.delete(_url, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateDish(dish: Dish): Observable<Dish> {
    return this._http.put<Dish>(this._url, dish, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  getDishesFullInfo(): Observable<HttpResponse<Dish[]>> {
    return this._http.get<Dish[]>(this._url, { observe: 'response' });
  }

  getAllDishes(): Observable<Dish[]> {
    return this._http.get<Dish[]>(this._url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) { // Catch and throw an error
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
