import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorAmountComponent } from './calculator-amount.component';

describe('CalculatorAmountComponent', () => {
  let component: CalculatorAmountComponent;
  let fixture: ComponentFixture<CalculatorAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
