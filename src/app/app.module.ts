import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { RandomPipe } from './random.pipe';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    LeaderBoardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
