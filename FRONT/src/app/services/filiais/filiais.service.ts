import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Filial } from 'src/app/models/filial.model';

@Injectable({
  providedIn: 'root'
})
export class FiliaisService {

  url = 'http://localhost:3000/filiais';
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

  public setFilial(filial:Filial):Observable<Filial>{
    return this.http.post<Filial>(this.url, filial, this.httpOptions);
  }

}