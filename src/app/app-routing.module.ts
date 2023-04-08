import { PeliculasComponent } from './routes/components/peliculas/peliculas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/components/inicio/inicio.component';
import { SeriesComponent } from './routes/components/series/series.component';
import { IngresarComponent } from './routes/components/ingresar/ingresar.component';

const routes: Routes = [
{
  path:'inicio',
  component: InicioComponent,
},
{
  path:'peliculas',
  component: PeliculasComponent,
},
{
  path:'**',
  redirectTo:'inicio',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
