import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogItemComponent } from './dog-item.component';

describe('DogItemComponent', () => {
  let component: DogItemComponent;
  let fixture: ComponentFixture<DogItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogItemComponent]
    });
    fixture = TestBed.createComponent(DogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
