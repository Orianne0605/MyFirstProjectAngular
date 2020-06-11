import { Subject } from 'rxjs/Subject';

export class GameService {

  appGamesSubject = new Subject<any[]>();

  private appGames = [
    {
      name: 'computer',
      status: 'off'
    },
    {
      name: 'mouse',
      status: 'on'
    },
    {
      name: 'screen',
      status: 'on'
    }
  ];

  emitAppGamesSubject() {
    this.appGamesSubject.next(this.appGames.slice());
  }

  switchOnAll() {
    for (const appGame of this.appGames) {
      appGame.status = 'on';
    }
    this.emitAppGamesSubject();
  }
  switchOffAll() {
    for (const appGame of this.appGames) {
      appGame.status = 'off';
    }
    this.emitAppGamesSubject();
  }

  switchOnOne(index: number)  {
    this.appGames[index].status = 'on';
    this.emitAppGamesSubject();
  }
  switchOffOne(index: number)  {
    this.appGames[index].status = 'off';
    this.emitAppGamesSubject();
  }
}
