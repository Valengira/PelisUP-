import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { SeriesComponent } from './components/series/series.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';



@NgModule({
  declarations: [
    InicioComponent,
    SeriesComponent,
    PeliculasComponent,
    IngresarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
  ],

})
export class RoutesModule { }
