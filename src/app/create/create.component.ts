import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  cardStat = false;
  @Output() showCard = new EventEmitter<boolean>();

  createClick() {
    this.cardStat = !this.cardStat;
    this.showCard.emit(this.cardStat);
    // console.log(this.cardStat);
  }

  constructor() { }

  ngOnInit() {
  }

}
