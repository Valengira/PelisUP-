import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RoutesComponent } from './routes/routes.component';
import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RoutesModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
