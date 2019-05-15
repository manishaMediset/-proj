import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Movie';
  angForm: FormGroup;
  constructor(private movieservice: MoviesService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      category: ['', Validators.required ]
   });
  }

  
  
  addMovie(name, rating, category) {
      this.movieservice.addMovie(name, rating,category);
  }
  ngOnInit() {
  }
}