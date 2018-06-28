import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { CreateWeeklyTaskComponent } from './create-weekly-task/create-weekly-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    LeaderBoardComponent,
    CreateWeeklyTaskComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
