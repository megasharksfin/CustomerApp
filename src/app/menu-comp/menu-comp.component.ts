import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../../models/data-model';

@Component({
  selector: 'app-menu-comp',
  templateUrl: './menu-comp.component.html',
  styleUrls: ['./menu-comp.component.scss']
})
export class MenuCompComponent implements OnInit {

  @Input() sCard: boolean;
  @Output() customerData = new EventEmitter<Customer>();

  createForm = new FormGroup({
    cust_Code: new FormControl(''),
    cust_Name: new FormControl(''),
    cust_Add: new FormControl(''),
    cust_BU: new FormControl('')
  });

  clearForms() {
    this.createForm.reset();
  }

  onSubmit() {
    const code: number = this.createForm.controls.cust_Code.value;
    const name: string = this.createForm.controls.cust_Name.value;
    const add: string = this.createForm.controls.cust_Add.value;
    const bu: string = this.createForm.controls.cust_BU.value;

    const custInfo: Customer = {code, name, add, bu, checked: false};

    this.customerData.emit(custInfo);
    // console.log(cust_info);

    this.createForm.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
