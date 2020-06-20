import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallealquiler',
  templateUrl: './detallealquiler.component.html'
})
export class DetallealquilerComponent implements OnInit {

  alquiler: Alquiler;

  constructor(private alquilerService: AlquilerService,
    private activateRoute: ActivatedRoute) { }

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

}
