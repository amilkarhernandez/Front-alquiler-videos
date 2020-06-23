import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private url;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  getTotalClientes(): Observable<[]>{
    return this.http.get<[]>(this.url + '/clientes/total', {headers: this.httpHeaders});
  }

  getTotalVideojuegos(): Observable<[]>{
    return this.http.get<[]>(this.url + '/videojuegos/total', {headers: this.httpHeaders});
  }

  getTotalAlquiler(): Observable<[]>{
    return this.http.get<[]>(this.url + '/alquiler/total', {headers: this.httpHeaders});
  }

  getClienteFrecuente(): Observable<[]>{
    return this.http.get<[]>(this.url + '/clientes/top', {headers: this.httpHeaders});
  }

  getRangos():Observable<any[]>{
    return this.http.get<[]>(this.url + '/videojuegos/rangos', {headers: this.httpHeaders});
  }


}
