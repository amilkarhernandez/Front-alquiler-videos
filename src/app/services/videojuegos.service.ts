import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GLOBAL } from './GLOBAL';
import swal from 'sweetalert2';
import { Videojuegos } from '../models/Videojuegos';
import { Tecnologias } from '../models/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  public httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url;

  constructor(private http: HttpClient, private router: Router) {
    this.url = GLOBAL.url;
  }

  getListVideojuegos(): Observable<Videojuegos[]> {
    return this.http.get<Videojuegos[]>(this.url + "/videojuegos");
  }

  create(videojuegos: Videojuegos): Observable<Videojuegos> {
    return this.http.post<Videojuegos>(this.url + "/videojuegos", videojuegos, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.satus == 400) {
          return throwError(e);
        }
        swal('Error al Crear', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getVideojuego(id): Observable<Videojuegos> {
    return this.http.get<Videojuegos>(`${this.url + "/videojuegos"}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/videojuegos']);
        swal('Error', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  updateVideojuegos(videojuegos: Videojuegos): Observable<Videojuegos> {
    return this.http.put<Videojuegos>(`${this.url + "/videojuegos"}/${videojuegos.id}`, videojuegos, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        if (e.satus == 400) {
          return throwError(e);
        }
        swal('Error al Actualizar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  deleteVideojuegos(id: number): Observable<Videojuegos> {
    return this.http.delete<Videojuegos>(`${this.url + "/videojuegos"}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        swal('Error al Eliminar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getListTecnologias(): Observable<Tecnologias[]> {
    return this.http.get<Tecnologias[]>(this.url + "/tecnologias");
  }

  getBusquedaCustomizada(director: String, protag: String, productor: String): Observable<Videojuegos[]>{
    return this.http.get<Videojuegos[]>(this.url + "/videojuegos/busqueda?director="+director+"&protag="+protag+"&productor="+productor).pipe(
      catchError(e => {
        this.router.navigate(['/videojuegos']);
        swal('Error', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

}
