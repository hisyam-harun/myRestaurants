import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-restaurant' },
  { path: 'restaurants-list', component: RestaurantsListComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'edit-restaurant/:id', component: RestaurantDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
