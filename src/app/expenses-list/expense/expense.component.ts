import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../shared/expenses.service';
import { Expense } from './expense.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense [] = [];

  constructor(private expenseService: ExpensesService) { }

  ngOnInit() {
    this.expenses = this.expenseService.expenses;
  }
}
