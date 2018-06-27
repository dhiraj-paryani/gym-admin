import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  private userData;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/users?sort=points,desc').subscribe(data => {
      this.userData = data;
      console.log(data);
    });

  }
}
