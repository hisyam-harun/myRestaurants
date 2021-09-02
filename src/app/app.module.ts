import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    RestaurantDetailComponent,
    RestaurantsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
