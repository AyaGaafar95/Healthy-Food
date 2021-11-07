import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllFoodsComponent } from './all-foods/all-foods.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { AddfoodComponent } from './addfood/addfood.component';

@NgModule({
  declarations: [AppComponent, AllFoodsComponent, FoodDetailsComponent, AddfoodComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
