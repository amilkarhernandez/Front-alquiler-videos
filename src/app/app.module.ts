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

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'formcliente', component: FormComponent},
  {path: 'formcliente/:id', component: FormComponent},
  {path: 'videojuegos', component: VideojuegosComponent},
  {path: 'formvideojuegos', component: FormvideojuegoComponent},
  {path: 'formvideojuegos/:id', component: FormvideojuegoComponent},
  {path: 'alquiler', component: AlquilerComponent},
  {path: 'alquiler/:id', component: DetallealquilerComponent},
  {path: 'consulta/usuario', component: ConsultaComponent},
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
    ConsultaComponent
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
