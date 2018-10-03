import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './../restaurant';

@Component({
  selector: 'app-selected-restaurant',
  templateUrl: './selected-restaurant.component.html',
  styleUrls: ['./../restaurants/restaurants.component.css',
              './selected-restaurant.component.css']
})
export class SelectedRestaurantComponent implements OnInit {

  @Input() r: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
