import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CowFilial } from 'src/app/models/cow-filial';

@Injectable({
  providedIn: 'root'
})
export class CowFiliaisService {
  url = 'http://localhost:3000/cow-filial';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  public getFilial():Observable<any>{
    return this.http.get(this.url);
  }

  public setFilial(cowFilial:CowFilial):Observable<CowFilial>{
    return this.http.post<CowFilial>(this.url, cowFilial, this.httpOptions);
  }

}
