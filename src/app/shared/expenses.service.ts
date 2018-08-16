import { Injectable } from '@angular/core';
import { Expense } from '../expenses-list/expense/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expenses: Expense [] = [];

  constructor() { }

  onAddExpenseToExpenses(expense: Expense) {
    this.expenses.push(expense);
  }

  getExpenses() {
    return this.expenses.slice();
  }
}
