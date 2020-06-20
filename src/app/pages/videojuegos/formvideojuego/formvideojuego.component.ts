import { Component, OnInit } from '@angular/core';
import { Videojuegos } from 'src/app/models/Videojuegos';
import { Tecnologias } from 'src/app/models/Tecnologia';
import { VideojuegosService } from 'src/app/services/videojuegos.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formvideojuego',
  templateUrl: './formvideojuego.component.html',
  styleUrls: ['./formvideojuego.component.css']
})
export class FormvideojuegoComponent implements OnInit {

  public videojuego: Videojuegos = new Videojuegos;
  tecnologias: Tecnologias[];

  constructor(private videojuegoService: VideojuegosService,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.videojuegoService.getListTecnologias().subscribe(
      tecnologias => this.tecnologias = tecnologias
    );
    this.cargarVideojuego();
  }

  cargarVideojuego(): void {
    this.activateRouter.params.subscribe(
      params => {
        let id = params['id']
        if (id) {
          this.videojuegoService.getVideojuego(id).subscribe(
            (video) => this.videojuego = video
          )
        }
      }
    )
  }

  create(): void {
    this.videojuegoService.create(this.videojuego).subscribe(
      video => {
        this.router.navigate(['/videojuegos'])
        swal('Nuevo Video Juego', 'Video Juego creado con Exito', 'success')
      }
    )
    console.log(this.videojuego);
  }

  update(): void {
    this.videojuegoService.updateVideojuegos(this.videojuego).subscribe(
      cliente => {
        this.router.navigate(['/videojuegos'])
        swal('Video Juego Actualizado', 'Video Juego Actualizado con Exito', 'success')
      }
    )
  }

  compararTecnologia(o1: Tecnologias, o2: Tecnologias): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

}
