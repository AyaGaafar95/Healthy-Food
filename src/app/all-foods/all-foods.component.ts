import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { FoodSchema } from '../types';
@Component({
  selector: 'app-all-foods',
  templateUrl: './all-foods.component.html',
  styleUrls: ['./all-foods.component.css'],
})
export class AllFoodsComponent implements OnInit {
  foods: FoodSchema[] = [];
  food: FoodSchema;
  loading = true;
  constructor(
    private foodService: FoodService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const videoElement = this.elementRef.nativeElement.querySelector('video');
    videoElement.muted = true;
    videoElement.play();
    // this.foodService.
    this.getTableData();
  }
  getTableData() {
    this.foodService.getAllFoods().subscribe(
      (data: FoodSchema[]) => {
        this.foods = data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  goToDetails(foodId) {
    this.router.navigateByUrl(`/foods/${foodId}`);
  }
  addFood() {
    this.router.navigateByUrl(`foods/add`);
  }
  goToEdit(foodId) {
    this.router.navigateByUrl(`/foods/edit/${foodId}`);
  }
  deleteFood(foodId) {
    this.foodService.deleteFood(foodId).subscribe(
      () => {
        this.getTableData();
      },
      () => {}
    );
  }
}
