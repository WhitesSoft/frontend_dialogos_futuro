import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscrito } from '../../core/models/inscrito.models';

@Injectable({
  providedIn: 'root',

})
export class InscripcionService {

  constructor(private http: HttpClient) { }


  baseUrl:string = 'https://8d3j97mk-3000.brs.devtunnels.ms'


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

}
