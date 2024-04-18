import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscrito } from '../../core/models/inscrito.models';
import { Expositor } from '../../core/models/expositor.models';

@Injectable({
  providedIn: 'root',

})
export class InscripcionService {

  constructor(private http: HttpClient) { }


  baseUrl:string = 'http://192.168.1.194:3000'


  getInscritos(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/personas')
  }

  getIdentificadores(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/identificadores')
  }

  addInscrito(data: Inscrito): Observable<any> {
    return this.http.post(this.baseUrl + '/api/personas', data)
  }

  getInscritoQr(qr: string): Observable<Inscrito> {
    return this.http.get<Inscrito>(this.baseUrl + `/api/personas/qr/${qr}`)
  }

  getInscrito(id: number): Observable<Inscrito> {
    return this.http.get<Inscrito>(this.baseUrl + `/api/personas/${id}`)
  }

  liberarManilla(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/api/identificadores/persona/${id}`)
  }

  getExpositores(): Observable<Expositor[]> {
    return this.http.get<Expositor[]>(this.baseUrl + `/api/autores`)
  }

  getExpositor(id: number): Observable<Expositor> {
    return this.http.get<Expositor>(this.baseUrl + `/api/autores/${id}`)
  }

}
