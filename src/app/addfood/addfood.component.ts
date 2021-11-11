import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';

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
  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void {}
  submitFood() {
    this.foodService.addFood(this.healthyFoodForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      () => {}
    );
  }
}
