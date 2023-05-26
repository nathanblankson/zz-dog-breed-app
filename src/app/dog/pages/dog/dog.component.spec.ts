import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponent } from './';

describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogComponent]
    });
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
