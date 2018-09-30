import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurant';
import { RestaurantService } from './../restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css',
              './../css/listsection.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]; 
  selectedRestaurant: Restaurant;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants(); 
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    window.scroll({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(r => this.restaurants = r); 
  }

}