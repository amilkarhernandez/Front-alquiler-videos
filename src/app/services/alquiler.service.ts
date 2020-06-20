import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GLOBAL } from './GLOBAL';
import { Observable, throwError } from 'rxjs';
import { Alquiler } from '../models/Alquiler';
import { Videojuegos } from '../models/Videojuegos';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private url;
  
  constructor(private http: HttpClient, private router: Router) { 
    this.url = GLOBAL.url;
  }

  getAlquiler(id: number): Observable<Alquiler>{
    return this.http.get<Alquiler>(`${this.url+"/alquiler"}/${id}`);
  }

  delete(id: number):Observable<void>{
    return this.http.delete<void>(`${this.url+"/alquiler"}/${id}`);
  }

  filtrarVideojuegos(term: String): Observable<Videojuegos[]>{
    return this.http.get<Videojuegos[]>(`${this.url + "/alquiler"}/filtrarvideojuegos/${term}`);
  }

  create(alquiler: Alquiler): Observable<Alquiler> {
    return this.http.post<Alquiler> (this.url+"/facturas", alquiler, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if(e.satus == 400){
          return throwError(e);
        }
        swal('Error al Crear', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  

}
