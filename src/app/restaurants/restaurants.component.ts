import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurant';
import { RestaurantService } from './../restaurant.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css',
              './../css/style.css',
              './../css/listsection.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]; 
  selectedRestaurant: Restaurant;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getRestaurants(); 
    this.route.params.subscribe(params => {
      this.getRestaurants(); 
    });
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getRestaurants(): void {
    console.log("hi");
    const type: string = this.route.snapshot.paramMap.get('type');
    this.restaurantService.getRestaurantsWithFilter(type).subscribe(r => this.restaurants = r); 
    // if (type) {
    //   this.restaurantService.getRestaurantsWithFilter(type).subscribe(r => this.restaurants = r); 
    // } else {
    //   this.restaurantService.getRestaurants().subscribe(r => this.restaurants = r); 
    // }
  }

}