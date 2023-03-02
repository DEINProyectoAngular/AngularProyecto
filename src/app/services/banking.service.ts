import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  customers = ["pepe"];

  addCustomer(customerName: string) {
    this.customers.push(customerName);
  }

  getCustomers() {
    return this.customers;
  }
}
