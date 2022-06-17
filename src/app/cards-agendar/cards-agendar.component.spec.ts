import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAgendarComponent } from './cards-agendar.component';

describe('CardsAgendarComponent', () => {
  let component: CardsAgendarComponent;
  let fixture: ComponentFixture<CardsAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAgendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
