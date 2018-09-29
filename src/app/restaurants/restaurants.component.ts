import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css',
              './../css/listsection.css']
})
export class RestaurantsComponent implements OnInit {

  restaurant: Restaurant = {
    id: 1,
    name: 'Dorinku',
    desc: "Creative takes on Japanese street fare, from sushi to ramen & beef, in a chic space with a full bar.",
    Gmaps: "https://goo.gl/maps/fzex6Ps8uhy", 
    cuisine: "Asian",
    type: "Restaurant"
  }

  constructor() { }

  ngOnInit() {
  }

}
