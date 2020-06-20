import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/Clientes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, flatMap} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Alquiler } from 'src/app/models/Alquiler';
import { Videojuegos } from 'src/app/models/Videojuegos';
import { ClientesService } from 'src/app/services/clientes.service';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { ItemAlquiler } from 'src/app/models/ItemAlquiler';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  
  alquiler: Alquiler = new Alquiler();
  clientes: Clientes[];

  autoCompleteControl = new FormControl();
  videojuegosFiltrados: Observable<Videojuegos[]>;

  constructor(private clienteService: ClientesService, 
    private alquilerService: AlquilerService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarClientes();
    this.videojuegosFiltrados = this.autoCompleteControl.valueChanges
      .pipe(
        map(value => typeof value === 'string' ? value : value.descripcion),
        flatMap(value => value ? this._filter(value) : [])
      );
  }

  private _filter(value: string): Observable<Videojuegos[]> {
    const filterValue = value.toLowerCase();
    return this.alquilerService.filtrarVideojuegos(filterValue);
  }

  mostrarNombre(videojuego?: Videojuegos): string | undefined {
    return videojuego ? videojuego.titulo : undefined;
  }

  seleccionarVideojuego(event: MatAutocompleteSelectedEvent): void {
    let videojuego = event.option.value as Videojuegos;
    console.log(videojuego);

    if (this.existeItem(videojuego.id)) {
      this.incrementaCantidad(videojuego.id);
    } else {
      let nuevoItem = new ItemAlquiler();
      nuevoItem.videojuego = videojuego;
      this.alquiler.items.push(nuevoItem);
    }

    this.autoCompleteControl.setValue('');
    event.option.focus();
    event.option.deselect();

  }

  existeItem(id: number): boolean {
    let existe = false;
    this.alquiler.items.forEach((item: ItemAlquiler) => {
      if (id === item.videojuego.id) {
        existe = true;
      }
    });
    return existe;
  }

  incrementaCantidad(id: number): void {
    this.alquiler.items = this.alquiler.items.map((item: ItemAlquiler) => {
      if (id === item.videojuego.id) {
        ++item.cantidad;
      }
      return item;
    });
  }

  actualizarCantidad(id: number, event: any): void {
    
    let cantidad: number = event.target.value as number;
    if (cantidad == 0) {
      return this.eliminarItemAlquiler(id);
    }
    this.alquiler.items = this.alquiler.items.map((item: ItemAlquiler) => {
      if (id === item.videojuego.id) {
        item.cantidad = cantidad;
      }
      return item;
    });
  }

  eliminarItemAlquiler(id: number): void {
    this.alquiler.items = this.alquiler.items.filter((item: ItemAlquiler) => id !== item.videojuego.id);
  }

  cargarClientes(): void {
    this.clienteService.getListClientes().subscribe(
      clientes => this.clientes = clientes
   );
  }

  create(alquilerForm): void {
    console.log(this.alquiler);
    if (this.alquiler.items.length == 0) {
      this.autoCompleteControl.setErrors({ 'invalid': true });
    }

    if (alquilerForm.form.valid && this.alquiler.items.length > 0) {
      this.alquilerService.create(this.alquiler).subscribe(
        response => {
         
       var obj = JSON.parse(JSON.stringify(response))

        swal("Alquiler", `Alquiler creado con éxito!`, 'success');
        console.log(obj);
        
        this.router.navigate(['/alquiler', obj.Alquiler.id]);
      });
    }
  }

}
