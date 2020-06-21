import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  textSearch: string
  alquiler: Alquiler[];
  constructor(private alquilerService: AlquilerService, private router: Router) { }

  ngOnInit(): void {
  }

  consultarAlquiler():void{
    console.log(this.textSearch);
    
    this.alquilerService.getFindNit(this.textSearch).subscribe(
      resp => {
        this.alquiler = resp;
      }
    );
  }

  mostrarDetalle(id){
    this.router.navigate(['/alquiler', id]);
  }

}
