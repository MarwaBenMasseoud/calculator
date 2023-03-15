import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CalculatorComponentValue, Combination} from "../../shared/model/Combination";
import {AuthentificationService} from "../../shared/service/authentification.service";

@Component({
  selector: 'app-desired-amount',
  templateUrl: './desired-amount.component.html',
  styleUrls: ['./desired-amount.component.css']
})
export class DesiredAmountComponent implements OnInit {

  public reactiveForm!: FormGroup;
  public amount!: number;
  public floorCombination !: Combination;
  public ceilCombination !: Combination;
  public showButtonCeil: boolean = false;
  public showButtonFloor: boolean = false;

  @Input()
  public shopId!: number;

  @Output()
  public sendCards: EventEmitter<Combination> = new EventEmitter<Combination>();

  @Output()
  public sendCardsNotEqual: EventEmitter<CalculatorComponentValue> = new EventEmitter<CalculatorComponentValue>();

  @Output()
  public emptyCards: EventEmitter<[]> = new EventEmitter<[]>();

  constructor(private authentificationService: AuthentificationService) {
    this.reactiveForm = new FormGroup({
      amount: new FormControl('', [Validators.pattern("^[0-9]*$")])
    });
  }

  ngOnInit() {
    this.reactiveForm?.get("amount")?.valueChanges.subscribe(x => {
      this.emptyCards.emit([]);
    })
  }

  public sendDesiredAmount(): void {
    this.amount = this.reactiveForm.value;
    this.authentificationService.login(this.amount, this.shopId).subscribe(
      (resp: Combination) => {
        this.sendCards.emit(resp);
        this.selectedCategory(resp);
      });
  }

  public selectedCategory(category: Combination): void {
    if (category?.equal && category?.floor && category?.ceil) {
      this.showButtonCeil = false;
      this.showButtonFloor = false;

    } else if (category?.floor && category?.ceil) {
      this.showButtonCeil = true;
      this.showButtonFloor = true;
      this.floorCombination = category;
      this.ceilCombination = category;

    } else if (category?.ceil) {
      this.sendCards.emit(category);
      this.ceilCombination = category;
      this.reactiveForm.setValue({amount: this.ceilCombination.ceil.value});
      this.showButtonCeil = false;
      this.showButtonFloor = false;

    } else if (category?.floor) {
      this.floorCombination = category;
      this.sendCards.emit(category);
      this.reactiveForm.setValue({amount: this.floorCombination.floor.value});
      this.showButtonCeil = false;
      this.showButtonFloor = false;
    }
  }

  public sendFloorAmount(): void {
    this.sendCardsNotEqual.emit(this.floorCombination.floor);
    this.reactiveForm.setValue({amount: this.floorCombination.floor.value});
    this.showButtonCeil = false;
    this.showButtonFloor = false;
  }

  public sendCeilAmount(): void {
    this.sendCardsNotEqual.emit(this.ceilCombination.ceil);
    this.reactiveForm.setValue({amount: this.ceilCombination.ceil.value});
    this.showButtonCeil = false;
    this.showButtonFloor = false;
  }

}

