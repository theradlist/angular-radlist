import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRestaurantComponent } from './selected-restaurant.component';

describe('SelectedRestaurantComponent', () => {
  let component: SelectedRestaurantComponent;
  let fixture: ComponentFixture<SelectedRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
