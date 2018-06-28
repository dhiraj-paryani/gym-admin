import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateWeeklyTaskComponent} from './create-weekly-task/create-weekly-task.component';

const appRoutes: Routes = [
  { path: 'board', component: DashboardComponent },
  { path: 'weekly-tasks', component: CreateWeeklyTaskComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
