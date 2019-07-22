import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/models/data-model';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.scss']
})
export class ToolbarsComponent implements OnInit {
  @Input() checkMark: boolean;
  @Input() delChecked: Customer;
  @Input() checkedCust: Customer;
  @Input() customerCheckbox: Customer[];
  @Output() deleteClicked = new EventEmitter<boolean>();
  @Output() uncheck = new EventEmitter<boolean>();

  changeCheck: boolean;
  delAll(){
    if(confirm("Are you sure you want to delete the selected row/s?")){
      this.deleteClicked.emit(true);
      this.uncheck.emit(this.changeCheck = false);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
