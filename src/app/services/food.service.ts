import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
