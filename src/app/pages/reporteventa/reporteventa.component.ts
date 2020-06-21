import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquilerService } from 'src/app/services/alquiler.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reporteventa',
  templateUrl: './reporteventa.component.html',
  styleUrls: ['./reporteventa.component.css']
})
export class ReporteventaComponent implements OnInit {

  alquiler: Alquiler[];
  dateInFormat: string;
  constructor(private alquilerService: AlquilerService) { 
  
    const date = moment();
        this.dateInFormat = date.format('yyyy-MM-DD');
        console.log(this.dateInFormat);
  }

  ngOnInit(): void {
    this.alquilerService.ventaDia(this.dateInFormat).subscribe(
      (alquiler) =>{
        this.alquiler = alquiler;
       }
    )
    
  }

}
