import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFoodsComponent } from './all-foods/all-foods.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
  { path: '', component: AllFoodsComponent },
  { path: 'foods/:Id', component: FoodDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
