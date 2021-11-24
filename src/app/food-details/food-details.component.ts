import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { FoodSchema } from '../types';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css'],
})
export class FoodDetailsComponent implements OnInit {
  loading = true;
  requiredFood: FoodSchema;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.foodService
        .getFoodById(data.params.Id)
        .subscribe((value: FoodSchema) => {
          this.requiredFood = value;
          this.loading = false;
        });
    });
  }
}
// function getFoodById(Id: any) {
//   throw new Error('Function not implemented.');
// }
