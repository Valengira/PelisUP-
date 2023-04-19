import { Trending } from 'src/app/shared/interfce/Trending.interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {
   api_key='3c5212d3dad1022cc22e9e88c98866b9';
   base_url ='https://api.themoviedb.org/3/';

  constructor(
    private _http: HttpClient,
  ) { }

  getTrending(): Observable<Trending> {

    return this._http.get<Trending>(this.base_url + '/trending/all/week', {
      params : {
        api_key: this.api_key,
      },
    })
  }

  getMovies(): Observable<any> {
    return this._http.get(this.base_url + '/movies/popular', {
      params: {
        api_key: this.api_key
      },
      })
  }
  getSeries(): Observable<any> {

    return this._http.get(this.base_url + '/tv/popular', {
      params : {
        api_key: this.api_key,
      },
    })
  }

}
