import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,

}from '@firebase/firestore';
import { Firestore, collectionData, docData} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { MovieSerie } from '../shared/interfce/MovieSerie.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

    private moviesCollection: CollectionReference<DocumentData>

  constructor(
    private firestore: Firestore
  ) {
    this.moviesCollection  =collection(this.firestore, 'movies');
  }
  addMovie(data: MovieSerie) {
    const collectionMovieRef = collection(this.firestore, 'movies');
    return addDoc(collectionMovieRef, data).then((response) => {
      console.log('TODO OK', response);
    }).catch((error) => {
      console.log('ERROR', error);
    })
  }
  getMovie() {
    const collectionMovieRef = collection(this.firestore, 'movies');
    return collectionData(collectionMovieRef, { idField: 'id'}) as Observable<MovieSerie[]>;
  }
  deleteMovie(id: number): Promise<any> {
    const documentMovieRef = doc(this.firestore, `movies/${id}`)
    console.log(documentMovieRef);
    return deleteDoc(documentMovieRef);
  }
}
