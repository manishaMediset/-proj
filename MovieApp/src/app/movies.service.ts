import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  addMovie(name, rating, category) {
    const uri = 'http://localhost:4000/movies/add';
    const obj = {
      name: name,
      rating: rating,
      category:category
    };
    
    this
    .http
    .post(uri, obj)
    .subscribe(res =>
        console.log('Done'));
}

getMovies() {
  const uri = 'http://localhost:4000/movies';
  return this
          .http
          .get(uri)
          .map(res => {
            return res;
          });
}
}