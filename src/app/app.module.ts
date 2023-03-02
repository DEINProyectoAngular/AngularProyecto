import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { CustomerComponent } from './customer/customer.component';
import { BankingService } from './services/banking.service';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
