import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}   from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  getMovie():Observable<any>
  {
    const url="https://api.themoviedb.org/3/movie/popular?api_key=c28c84b38d66dd410817547ce2f9351b&language=en-US&page=1";
    return this.http.get(url);
  }

    addRate(id,Rate):Observable<any>{

    return this.http.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=c28c84b38d66dd410817547ce2f9351b`, 
      Rate, httpOptions)
      // .pipe(
      //   catchError(this.handleError('addHero', hero))
      // );
  }

  deleteRatee (idd: number): Observable<any> {
    const urll =  `https://api.themoviedb.org/3/movie/${idd}/rating?api_key=c28c84b38d66dd410817547ce2f9351b`; // DELETE api/heroes/42
    return this.http.delete(urll, httpOptions)
      // .pipe(
      //   catchError(this.handleError('deleteHero'))
      // );
  }
}
