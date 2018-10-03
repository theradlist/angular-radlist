import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SelectedRestaurantComponent } from './selected-restaurant/selected-restaurant.component';
import { FilterComponent } from './filter/filter.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    LandingPageComponent,
    SelectedRestaurantComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
