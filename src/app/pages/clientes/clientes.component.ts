import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/Clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  p: any;
  clientes: Clientes[];

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.clienteService.getListClientes().subscribe(
       clientes => this.clientes = clientes
    );
  }

  delete(cliente: Clientes): void{
    swal({
      title: 'Estas Seguro?',
      text: "Seguro deseas Eliminar este Cliente?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.clienteService.deleteCliente(cliente.id).subscribe(
          reponse => {
            this.clientes = this.clientes.filter(user=> user !== cliente)
            swal(
              'Borrado!',
              'El Cliente ha sido Eliminado con Exito',
              'success'
            )
          }
        )
        
      }
    })
  }

}
