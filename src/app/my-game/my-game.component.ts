import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css']
})
export class MyGameComponent implements OnInit {

  @Input() appGame: string;
  @Input() appStatus: string;
  @Input() index: number;

  constructor(private gameService: GameService) { }

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
  onSwitchOn() {
    this.gameService.switchOnOne(this.index);
  }
  onSwitchOff() {
    this.gameService.switchOffOne(this.index);
  }
}
