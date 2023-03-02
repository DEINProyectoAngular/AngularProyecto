import { Component } from '@angular/core';
import { BankingService } from '../services/banking.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.sass']
})
export class BankComponent {
  title = 'Bank';
  customers = ["pepe"];

  constructor(private bankingService: BankingService) { }

  addCustomer() {
    const customerName = prompt('Enter customer name:');
    this.bankingService.addCustomer(customerName !);
    this.customers = this.bankingService.getCustomers();
  }
}
