import { InicioComponent } from './routes/inicio/inicio.component';
import { PelisComponent } from './routes/pelis/pelis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { DeshboardComponent } from './routes/components/deshboard/deshboard.component';

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
{
  path: 'deshboard',
  component: DeshboardComponent,
},
{
  path: '**',
  redirectTo: 'inicio'
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
