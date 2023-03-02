import { Component } from '@angular/core';
import { BankingService } from '../services/banking.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
})
export class CustomerComponent {
  title = 'Customer';
  customers = ["pepe"];

  constructor(private bankingService: BankingService) {}
  //this.customers = this.bankingService.getCustomers();
  getCustomers() {
    this.customers = this.bankingService.getCustomers();
  }
}
