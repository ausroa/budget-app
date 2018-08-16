import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ExpensesService } from '../shared/expenses.service';
import { Expense } from './expense/expense.model';
import { IncomesService } from '../shared/incomes.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  sumPrices = 0;
  expense: Expense;
  expenses: Expense[] = [];
  income: number;
  incomeAmount: number;
  remainingAmount: number;
  item: string;
  price: number;
  incomeClear: number;
  @ViewChild('inputField') inputs: ElementRef;

  constructor(private expenseService: ExpensesService,
              private incomeService: IncomesService) { }

  ngOnInit() {
    this.expenses = this.expenseService.expenses;
  }

  onAddExpense(item: string, price: number) {
    this.expense = new Expense(item, price);
    this.expenseService.onAddExpenseToExpenses(this.expense);
    this.item = '';
    this.price = null;
  }

  onAddIncome(income: number) {
    this.income = income;
    this.incomeAmount = income;
    this.incomeService.onAddIncomeToIncome(this.incomeAmount);
  }

  onCalculate(income: number) {
    for (const i of this.expenses) {
      this.sumPrices += i.price;
    }
    this.remainingAmount = income - this.sumPrices;
  }

  onClear() {
    this.expenses.length = 0;
    this.expense = null;
  }
}
