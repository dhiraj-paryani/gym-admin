import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-weekly-task',
  templateUrl: './create-weekly-task.component.html',
  styleUrls: ['./create-weekly-task.component.css']
})
export class CreateWeeklyTaskComponent implements OnInit {

  public taskTypes = [
    'STREAK', 'TOTAL_TIME', 'STEPS', 'CALORIES'
  ];
  public taskTypeSelected: String;
  public taskName: String;
  public winCondition: String;
  public points: String;
  public showSuccessMessage: Boolean;
  public showErrorMessage: Boolean;


  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.httpClient.post('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/task', {
      'taskType': this.taskTypeSelected,
      'taskName': this.taskName,
      'winCondition': this.winCondition,
      'points': this.points,
      'weekId': new Date().getTime()
    }).subscribe( () => {
      this.showSuccessMessage = true;
    }, () => {
      this.showErrorMessage = true;
    });
  }

  reRouteToDashBoard() {
    this.router.navigateByUrl('board');
  }
}
