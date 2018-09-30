import { Component, OnInit } from '@angular/core';
import { FilterService } from './../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css',
              './../css/filtersection.css']
})
export class FilterComponent implements OnInit {

  constructor(public filterservice: FilterService) { }

  ngOnInit() {
  }

}
