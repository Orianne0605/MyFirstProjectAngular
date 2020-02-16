import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css']
})
export class MyGameComponent implements OnInit {

  @Input() appGame: string;
  @Input() appStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appStatus;
  }

  getColor() {
    if (this.appStatus === 'on') {
      return 'green';
    } else if (this.appStatus === 'off') {
      return 'red';
    }
  }
}
