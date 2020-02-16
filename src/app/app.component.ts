import { Component } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 isAuth = false;

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

 appGames = [
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

 constructor(){
   setTimeout(
     () => {
       this.isAuth = true;
     }, 2000
   );
 }
 onAll() {
   console.log('on allume tout !');
 }
}
