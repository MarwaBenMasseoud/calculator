import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-calculator-amount',
  templateUrl: './calculator-amount.component.html',
  styleUrls: ['./calculator-amount.component.css']
})
export class CalculatorAmountComponent implements OnInit{

  public shopId !: number;
  public cards: number[] | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.shopId = params['id'];
    });
  }
}
