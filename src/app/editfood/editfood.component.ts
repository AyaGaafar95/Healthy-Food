import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { FoodSchema } from '../types';

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css'],
})
export class EditfoodComponent implements OnInit {
  foodToEdit: FoodSchema;
  healthyFoodForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    picture: new FormControl('', [Validators.required]),
  });
  constructor(
    private foodService: FoodService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (data: ParamMap) => {
        this.foodService.getFoodById(data.get('Id')).subscribe(
          (dataOfFoodWhatWeWantEdit: FoodSchema) => {
            this.foodToEdit = dataOfFoodWhatWeWantEdit;
            this.healthyFoodForm.patchValue(this.foodToEdit);
          },
          () => {}
        );
      },
      () => {}
    );
  }
  submitedForm() {
    var newFoodData: FoodSchema = this.healthyFoodForm.value;
    newFoodData._id = this.foodToEdit._id;
    console.log(this.healthyFoodForm.value);
    this.foodService.editFood(this.healthyFoodForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      () => {}
    );
  }
}
