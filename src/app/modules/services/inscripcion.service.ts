import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscrito } from '../../core/models/inscrito.models';
import { Expositor } from '../../core/models/expositor.models';
import { Startup } from '../../core/models/startup.models';

@Injectable({
  providedIn: 'root',

})
export class InscripcionService {

  constructor(
    private http: HttpClient
  ) { }


  //baseUrl: string = 'https://sceii.dev.404.codes'
  baseUrl: string = 'https://8d3j97mk-3000.brs.devtunnels.ms'


  obtenerIdentificador(qr: any): Observable<any> {
    return this.http.post(this.baseUrl + "/api/login/identificador", qr)
  }

  getInscritos(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/personas')
  }

  getStartups(): Observable<Startup[]>{
    return this.http.get<Startup[]>(this.baseUrl + '/api/startups')
  }

  getIdentificadores(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/identificadores')
  }

  getIdentificadoresVacies(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/identificadores/empty')
  }

  addInscrito(data: Inscrito): Observable<any> {
    return this.http.post(this.baseUrl + '/api/personas', data)
  }

  moodificarInscrito(id:number, data: Inscrito): Observable<any> {
    return this.http.put(this.baseUrl + '/api/personas/'+id, data)
  }

  getInscritoQr(qr: string): Observable<Inscrito> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.get<Inscrito>(this.baseUrl + `/api/personas/qr/${qr}`, { headers: headers })
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

  getResultados(): Observable<Startup[]> {
    return this.http.get<Startup[]>(this.baseUrl + '/api/startups/resultados/last')
  }

  sendStartups(id: number, startups: any){
    return this.http.post<any>(this.baseUrl + `/api/startups/persona/${id}`, startups)
  }

  sendSugerencia(id: number, sugerencia: any){
    const suger = {
      sugerencia: sugerencia
    }
    return this.http.post<any>(this.baseUrl + `/api/sugerencias/persona/${id}`, suger)
  }

  saveUserData(data: any) {
    sessionStorage.setItem('user', JSON.stringify(data))
  }

  getUserData(): Observable<any> {
    return JSON.parse(sessionStorage.getItem('user')!)
  }

  saveUserToken(token: string) {
    sessionStorage.setItem('token', token)
  }

  getUserToken() {
    return sessionStorage.getItem('token')
  }

  saveAdmin(rol: string) {
    sessionStorage.setItem('rol', rol)
  }

  getAdmin() {
    return sessionStorage.getItem('rol')
  }

  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "/api/login", data)
  }

}
