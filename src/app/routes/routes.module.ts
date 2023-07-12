import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PelisComponent } from './pelis/pelis.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    PelisComponent,
    SeriesComponent,
    IngresarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    InicioComponent,
    PelisComponent,
    SeriesComponent,
    IngresarComponent,
  ]
})
export class RoutesModule { }
