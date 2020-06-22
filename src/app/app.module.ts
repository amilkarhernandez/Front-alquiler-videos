import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FormComponent } from './pages/clientes/form/form.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { FormvideojuegoComponent } from './pages/videojuegos/formvideojuego/formvideojuego.component';
import { AlquilerComponent } from './pages/alquiler/alquiler.component';
import { DetallealquilerComponent } from './pages/alquiler/detallealquiler.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { EntregaComponent } from './pages/entrega/entrega.component';
import { DetailsComponent } from './pages/entrega/details/details.component';
import { ReporteventaComponent } from './pages/reporteventa/reporteventa.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'formcliente', component: FormComponent},
  {path: 'formcliente/:id', component: FormComponent},
  {path: 'videojuegos', component: VideojuegosComponent},
  {path: 'formvideojuegos', component: FormvideojuegoComponent},
  {path: 'formvideojuegos/:id', component: FormvideojuegoComponent},
  {path: 'alquiler', component: AlquilerComponent},
  {path: 'alquiler/:id', component: DetallealquilerComponent},
  {path: 'consulta/usuario', component: ConsultaComponent},
  {path: 'entrega', component: EntregaComponent},
  {path: 'entrega/:id', component: DetailsComponent},
  {path: 'reporte/ventadia', component: ReporteventaComponent},
  {path: 'reporte/busqueda', component: BusquedaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ClientesComponent,
    FormComponent,
    VideojuegosComponent,
    FormvideojuegoComponent,
    AlquilerComponent,
    DetallealquilerComponent,
    ConsultaComponent,
    EntregaComponent,
    DetailsComponent,
    ReporteventaComponent,
    DashboardComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, ReactiveFormsModule, NgxPaginationModule,
    MatAutocompleteModule, 
    MatInputModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
