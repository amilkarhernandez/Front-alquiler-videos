import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  alquiler: Alquiler;
  constructor(private alquilerService: AlquilerService,
    private activateRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      paramns => {
        let id = +paramns.get('id');
        this.alquilerService.getAlquiler(id).subscribe(
          alquiler => {
            this.alquiler = alquiler;
          }
        )
      }
    )
  }

  entregar(id):void{
    swal({
      title: 'Estas Seguro?',
      text: "Seguro deseas Cambiar el estado de Este Aquiler?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cambiar!'
    }).then((result) => {
      if (result.value) {
        this.alquilerService.entregarAlquiler(id).subscribe(
          reponse => {
            this.router.navigate(['/entrega']);
            swal(
              'Actualizado!',
              'El Alquiler se Cambió con Exito',
              'success'
            )
          }
        )
        
      }
    })
  }

}
