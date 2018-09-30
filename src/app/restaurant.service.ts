import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';

import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private filterservice: FilterService) { }

  getRestaurants(): Observable<Restaurant[]> { 
    this.filterservice.add("hiya"); 
    return of(RESTAURANTS); 
  }
}
