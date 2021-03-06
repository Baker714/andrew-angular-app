import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { ResumeDisplayComponent } from './resume-display/resume-display.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { PianoComponent } from './piano/piano.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeDisplayComponent},
  {path: 'games', component: GamesComponent },
  {path: 'piano', component: PianoComponent },
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    ResumeDisplayComponent,
    GamesComponent,
    HomeComponent,
    PianoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
