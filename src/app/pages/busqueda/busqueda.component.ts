import { Component, OnInit } from '@angular/core';
import { Videojuegos } from 'src/app/models/Videojuegos';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  p: any;
  public videojuegos: Videojuegos = new Videojuegos;
  videojuegosList: Videojuegos[];
  constructor(private videoJuegoService: VideojuegosService) { }

  ngOnInit(): void {
  }

  cargarConsulta(){
    this.videoJuegoService.getBusquedaCustomizada(this.videojuegos.director, 
      this.videojuegos.protagonistas, this.videojuegos.productor).subscribe(
        resp =>{
          this.videojuegosList = resp;
          console.log(resp);
          
        }
      );
  }

}
