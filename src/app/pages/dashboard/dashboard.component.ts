import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Clientes } from 'src/app/models/Clientes';
import { Rangos } from 'src/app/models/Rangos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalClientes:any;
  totalVideojuegos:any;
  totalAlquiler:any;
  clientesfrec: Clientes[];
  rangos: Rangos[];
  private r: Rangos = new Rangos();
  constructor(private dashboardServide: DashboardService) { }

  ngOnInit(): void {
    this.totalClientes = this.dashboardServide.getTotalClientes().subscribe(
      response => {
        this.totalClientes = response;
      }
    );
    this.totalVideojuegos = this.dashboardServide.getTotalVideojuegos().subscribe(
      response => this.totalVideojuegos = response
    );
    this.totalAlquiler = this.dashboardServide.getTotalAlquiler().subscribe(
      response => this.totalAlquiler = response
    );
    this.dashboardServide.getClienteFrecuente().subscribe(
      cli => this.clientesfrec = cli
    );

    this.dashboardServide.getRangos().subscribe(
      res =>{
        this.rangos = res;
        var obj = JSON.parse(JSON.stringify(res));
        console.log(obj);
      }
    );
  }

}
