import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CalculatorComponentValue, Combination} from "../../shared/model/Combination";

@Component({
  selector: 'app-calculator-amount',
  templateUrl: './calculator-amount.component.html',
  styleUrls: ['./calculator-amount.component.css']
})
export class CalculatorAmountComponent implements OnInit{

  public shopId !: number;
  public cards: number[] | undefined;
  public showMessage: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.shopId = params['id'];
    });
  }

  public displayCards(combination: Combination): void {
    if (combination.equal) {
      this.cards = combination.equal.cards;
      this.showMessage = false;

    } else if (combination.ceil && combination.floor) {
      this.showMessage = true;

    } else if (combination.ceil) {
      this.cards = combination.ceil.cards;

    } else if (combination.floor) {
      this.cards = combination.floor.cards;

    }
  }

  public displayCardsNotEqual(combination: CalculatorComponentValue): void {
    this.cards = combination.cards;
    this.showMessage = false;
  }

  public emptyCards(emptyCards: number[]): void {
    this.cards = undefined;

  }
}
