import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/data-model';

@Component({
  selector: 'app-cust-table',
  templateUrl: './cust-table.component.html',
  styleUrls: ['./cust-table.component.scss'],
})
export class CustTableComponent implements OnInit {
  @Input() unchecker: boolean;
  @Input() customerData: Customer[];
  @Output() customerDel = new EventEmitter<Customer>();
  @Output() customerCheckbox = new EventEmitter<Customer[]>();
  @Output() delAppear = new EventEmitter<boolean>();
  @Output() deleteMarked = new EventEmitter<Customer>();
  isVisible = true;
  selectAll = false;
  markedBox = false;
  markedArray: Customer[];
  constructor() {  }

  displayedColumns: string[] = ['mark', 'code', 'name', 'add', 'bu', 'actions'];


  ngOnInit() {
  }

  editCustomer(customer: any) {
    customer.editable = !customer.editable;
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure you want to delete this row?')) {
      this.customerDel.emit(customer);
    }
  }

  markAll() {
    if (this.selectAll === true ) {
      this.customerData.map((customer) => {
        customer.checked = true;
        this.selectAll = true;
      });
    } else {
      this.customerData.map((customer) => {
        customer.checked = false;
        this.selectAll = false;
      });
    }
  }

  getMarkedAll() {
    if (this.customerData.some(customer => customer.checked === true)) {
      this.markedBox = true;
      this.delAppear.emit(this.markedBox);
    } else if (this.customerData.every(customer => customer.checked === false)) {
      this.markedBox = false;
      this.delAppear.emit(this.markedBox);
    }

    this.customerCheckbox.emit(this.customerData.filter(customer => customer.checked));
  }

  getMarked() {
    if (this.customerData.some(customer => customer.checked === true)) {
      this.markedBox = true;
      this.delAppear.emit(this.markedBox);
    } else if (this.customerData.every(customer => customer.checked === false)) {
      this.markedBox = false;
      this.delAppear.emit(this.markedBox);
    }

    this.customerCheckbox.emit(this.customerData.filter(customer => customer.checked));
  }
}
