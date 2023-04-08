import { CardsComponent } from './components/cards/cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent,

  ],
  imports: [
    CommonModule,
  ],
 exports:[
  HeaderComponent,
  CardsComponent,
 ]
})
export class SharedModule { }
