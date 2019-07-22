import { Component } from '@angular/core';
import { Customer } from '../models/data-model';
import { CustDataService } from './cust-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-app';
  customer: Customer[] = [];
  cardStat: boolean;
  customerCheckbox: Customer[] = [];
  custInfo: Customer;
  checkTrue: boolean;
  markedCust: Customer;
  uncheckForm: boolean;

  receiveMessage($event) {
    this.custInfo = $event;
    const temp = JSON.parse(JSON.stringify(this.customer));
    temp.push(this.custInfo);
    this.customer = temp;

    // this.custDataService.addCustomers(temp);
  }

  receiveShowCard($event) {
    this.cardStat = $event;
    // console.log(this.cardStat);
  }

  receiveMarked($event) {
    this.checkTrue = $event;
  }

  receiveDelMarked($event) {
    this.markedCust = $event;
  }

  receivedCustomerCheckbox($event) {
    this.customerCheckbox = $event;
  }

  constructor(private custDataService: CustDataService) {
    this.custDataService.getCustomers().subscribe(customer => {
       this.customer = customer;
    });
  }

  deleteCustomer($event: Customer) {
    const temp = this.customer.filter(c => c.code !== $event.code);
    this.customer = temp;
  }

  receiveDeleteChecked($event) {
    this.customerCheckbox.forEach(customer => {
      this.customer = this.customer.filter(c => c.code !== customer.code);
    });

    this.customerCheckbox = [];
  }

  receiveUncheck($event) {
    this.uncheckForm = $event;
  }
}
