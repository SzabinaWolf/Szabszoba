import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'new-game', component: NewGameComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
