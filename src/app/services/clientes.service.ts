import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GLOBAL } from './GLOBAL';
import { Clientes } from '../models/Clientes';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private url;

  constructor(private http: HttpClient, private router: Router) { 
    this.url = GLOBAL.url;
  }

  getListClientes(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.url + "/clientes");
  }

  create(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes> (this.url + "/clientes", cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if(e.satus == 400){
          return throwError(e);
        }
        swal('Error al Crear', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Clientes>{
    return this.http.get<Clientes>(`${this.url + "/clientes"}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal('Error', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  } 

  updateCliente(cliente: Clientes): Observable<Clientes>{
    return this.http.put<Clientes>(`${this.url + "/clientes"}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if(e.satus == 400){
          return throwError(e);
        }
        swal('Error al Actualizar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  deleteCliente(id: number): Observable<Clientes>{
    return this.http.delete<Clientes>(`${this.url + "/clientes"}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        swal('Error al Eliminar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  descargarExcel():Observable<Blob>{
    return this.http.get(this.url+"/clientes/export", { responseType: 'blob'});
  }
  
}
