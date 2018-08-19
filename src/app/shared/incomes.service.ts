import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {
  income = 0;

  constructor() { }

  onAddIncomeToIncome(income: number) {
    this.income += income;
    console.log(this.income);
    }

    clearIncome() {
      this.income = 0;
    }
  }
