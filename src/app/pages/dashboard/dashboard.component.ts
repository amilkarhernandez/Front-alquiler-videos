import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Clientes } from 'src/app/models/Clientes';

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
  }

}
