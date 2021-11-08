import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'path';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css'],
})
export class AddfoodComponent implements OnInit {
  healthyFoodForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    picture: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
}
