import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = 'http://localhost:3000/filiais'

  constructor(private http: HttpClient) { }

  public getFilial():Observable<any>{
    return this.http.get(this.url);
  }

}
