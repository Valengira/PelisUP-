import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PelisComponent } from './routes/pelis/pelis.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './routes/series/series.component';

const routes: Routes = [
{
  path:'inicio',
  component: InicioComponent ,
},
{
  path:'pelis',
  component: PelisComponent,
},

{
  path:'ingresar',
  component: IngresarComponent,
},
{
  path:'series',
  component: SeriesComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
