import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filter: string[] = []; 

  constructor() { }

  add(m: string) {
    this.filter.push(m); 
  }

  clear() {
    this.filter = []; 
  }
}
