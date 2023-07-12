import { Component } from '@angular/core';
import { MovieSerie } from 'src/app/shared/Interfaces/MovieSerie.interface';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  movies_series: MovieSerie[] = [
    {
      id: 1,
      name:'BLACK WIDOW',
      description:'',
      image:'./assets/1-black-widow.svg',
      rating: 0,
      category: 'Pelis'
    },
    {
      id: 2,
      name:'SHANG CHI',
      description:'',
      image:'./assets/2-shang-chi.svg',
      rating: 0,
      category: 'Pelis'
    },
    {
      id: 3,
      name:'LOKI',
      description:'',
      image:'./assets/3-loki.svg',
      rating: 0,
      category: 'Pelis'
    },
    {
      id: 4,
      name:'TWO AND A HALF MEN',
      description:'',
      image:'./assets/8-two.svg',
      rating: 0,
      category: 'Pelis'
    },
    {
      id: 5,
      name:'HOW I MET YOUR MOTHER',
      description:'',
      image:'./assets/4-mother.svg',
      rating: 0,
      category: 'Series'
    },
    {
      id: 6,
      name:'MONEY HEIST',
      description:'',
      image:'./assets/5-money-heist.svg',
      rating: 0,
      category: 'Series'
    },
    {
      id: 7,
      name:'FRIENDS',
      description:'',
      image:'./assets/6-friends.svg',
      rating: 0,
      category: 'Series'
    },
    {
      id: 8,
      name:'THE BIG BANG THEORY',
      description:'',
      image:'./assets/7-the-big-bang-theory.svg',
      rating: 0,
      category: 'Series',
    },
    ] ;

    selected: string ='Todos';
    cambiarCategoria(value:string){
      console.log('valor antiguo', this.selected);
      this.selected =value;
      console.log('valor nuevo', this.selected);
    }

}
