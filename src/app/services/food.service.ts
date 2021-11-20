import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodSchema } from '../types';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(public client: HttpClient) {}
  getAllFoods() {
    return this.client.get(
      'https://immense-sierra-13495.herokuapp.com/api/foods'
    );
  }
  addFood(foodObj) {
    return this.client.post(
      'https://immense-sierra-13495.herokuapp.com/api/foods',
      foodObj
    );
  }
  getFoodById(foodId): Observable<FoodSchema> {
    return this.client.get<FoodSchema>(
      `https://immense-sierra-13495.herokuapp.com/api/foods/${foodId}`
    );
  }
  editFood(foodObj) {
    return this.client.put(
      'https://immense-sierra-13495.herokuapp.com/api/foods',
      foodObj
    );
  }
  deleteFood(foodId) {
    return this.client.delete(
      `https://immense-sierra-13495.herokuapp.com/api/foods/${foodId}`
    );
  }
}
