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

  descargar(){
    this.clienteService.descargarExcel().subscribe(
      x =>{
        const blob = new Blob([x], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        if(window.navigator && window.navigator.msSaveOrOpenBlob){
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const dataa = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = dataa;
        link.download = "clientes.xlsx";
        link.dispatchEvent(new MouseEvent('click'));

        setTimeout(function(){
          window.URL.revokeObjectURL(dataa);
          link.remove();
        }, 100);
      });
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
