import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  movies: any;

  constructor(private http: HttpClient, private service: MoviesService) {}

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this.service.getMovies().subscribe(res => {
      this.movies = res;
    });
  }
}