import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MyGameComponent } from './my-game/my-game.component';
import { GameService } from './services/game.service';
import { AuthComponent } from './auth/auth.component';
import { GameViewComponent } from './game-view/game-view.component';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { EditGameComponent } from './edit-game/edit-game.component';

const appRoutes: Routes = [
  { path: 'appgames', component: GameViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: GameViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    MyGameComponent,
    AuthComponent,
    GameViewComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GameService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
