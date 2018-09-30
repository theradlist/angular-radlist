import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurant';
import { RESTAURANTS } from './../mock-restaurants';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css',
              './../css/listsection.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants = RESTAURANTS; 

  selectedRestaurant: Restaurant;
  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    window.scroll({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
  }

  constructor() { }

  ngOnInit() {
  }

}