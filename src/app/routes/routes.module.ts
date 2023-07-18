import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PelisComponent } from './pelis/pelis.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeshboardComponent } from './components/deshboard/deshboard.component';



@NgModule({
  declarations: [
    PelisComponent,
    SeriesComponent,
    IngresarComponent,
    DeshboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InicioComponent,
    PelisComponent,
    SeriesComponent,
    IngresarComponent,
  ]
})
export class RoutesModule { }
