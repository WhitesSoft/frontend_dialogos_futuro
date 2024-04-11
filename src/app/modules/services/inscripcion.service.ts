import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscrito } from '../../core/models/inscrito.models';

@Injectable({
  providedIn: 'root',

})
export class InscripcionService {

  constructor(private http:HttpClient) { }

  baseUrl:string = ''

  getInscritos():Observable<any>{
    return this.http.get(this.baseUrl+'/api/personas')
  }


  addInscrito(data:Inscrito):Observable<any>{
    return this.http.post(this.baseUrl+'/api/personas', data)
  }
}
