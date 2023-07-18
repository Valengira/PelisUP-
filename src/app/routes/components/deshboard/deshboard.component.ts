import { MoviesService } from './../../../services/movie-db.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent {
  totalPeliculas = 0;

 private movies_series:  any;

  constructor(
    private router: Router,
    private _firestoreService: FirestoreService
  ){}


  ngOnInit(){
    this.obtenerPeliculas();
  }

  redirectTo(ruta: string) {
    this.router.navigate([ruta])
  }

  obtenerPeliculas() {
    this._firestoreService.getMovie().subscribe({
      next: (response) => {
        this.totalPeliculas = response.length;
      }
    })
  }

}
