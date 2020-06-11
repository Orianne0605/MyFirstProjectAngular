import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

 isAuth = false;

 appGames: any[];
 appGamesSubscription: Subscription;

 lastUpdate = new Promise(
   (resolve, reject) => {
     const date = new Date();
     setTimeout(
       () => {
         resolve(date);
       }, 2000
     );
   }
 );

 constructor(private gameService: GameService) {
   setTimeout(
     () => {
       this.isAuth = true;
     }, 2000
   );
 }

 ngOnInit() {
   this.appGamesSubscription = this.gameService.appGamesSubject.subscribe(
     (appGames: any[]) => {
       this.appGames = appGames;
     }
   );
   this.gameService.emitAppGamesSubject();
 }

 onAll() {
  this.gameService.switchOnAll();
 }
 offAll() {
  this.gameService.switchOffAll();
 }
}
