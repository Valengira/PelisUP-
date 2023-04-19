import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PelisComponent } from './pelis/pelis.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



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
    FormsModule,
  ],
  exports: [
    InicioComponent,
  ]
})
export class RoutesModule { }
