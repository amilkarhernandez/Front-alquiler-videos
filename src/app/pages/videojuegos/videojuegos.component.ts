import { Component, OnInit } from '@angular/core';
import { Videojuegos } from 'src/app/models/Videojuegos';
import { VideojuegosService } from 'src/app/services/videojuegos.service';
import swal from 'sweetalert2';
import { Tecnologias } from 'src/app/models/Tecnologia';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  p: any;
  videojuegos: Videojuegos[];

  constructor(private videojuegoService: VideojuegosService) { }

  ngOnInit() {
    this.videojuegoService.getListVideojuegos().subscribe(
      videojuegos => this.videojuegos = videojuegos
    );
  }

  delete(videojuegos: Videojuegos): void{
    swal({
      title: 'Estas Seguro?',
      text: "Seguro deseas Eliminar este Video Juego?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.videojuegoService.deleteVideojuegos(videojuegos.id).subscribe(
          reponse => {
            this.videojuegos = this.videojuegos.filter(vide=> vide !== videojuegos)
            swal(
              'Borrado!',
              'El Videojuego ha sido Eliminado con Exito',
              'success'
            )
          }
        )
        
      }
    })
  }

}
