import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  alquiler: Alquiler[];
  constructor(private alquilerService: AlquilerService, private router:Router) { }

  ngOnInit(): void {
    this.alquilerService.getListAlquileres().subscribe(
      alquiler =>{
        this.alquiler = alquiler;
      }
    )
  }

  verDetalle(id){
    this.router.navigate(['/entrega/', id]);
  }

}
