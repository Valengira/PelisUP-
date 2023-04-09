import { CardsComponent } from './components/cards/cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
 exports:[
  HeaderComponent,
  CardsComponent,
  FooterComponent,
 ]
})
export class SharedModule { }
