import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {
  income: number[] = [];
  incomeAmount = 0;

  constructor() { }

  onAddIncomeToIncome(income: number) {
    this.income.push(income);

    for (const i of this.income) {
      if (this.income.length !== 0 && i === i) {  // income keeps doubling
        this.incomeAmount += i;
      }
    }
    console.log(this.incomeAmount);
  }
}
