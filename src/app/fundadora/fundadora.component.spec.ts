import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundadoraComponent } from './fundadora.component';

describe('FundadoraComponent', () => {
  let component: FundadoraComponent;
  let fixture: ComponentFixture<FundadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
