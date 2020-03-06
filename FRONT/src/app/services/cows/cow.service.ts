import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cow } from 'src/app/models/cow.models';

@Injectable({
  providedIn: 'root'
})
export class CowService {
  url = 'http://localhost:3000/cows';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  public getCow():Observable<any>{
    return this.http.get(this.url);
  }

  public setCow(cow:Cow):Observable<Cow>{
    return this.http.post<Cow>(this.url, cow, this.httpOptions);
  }
}
