import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  private userData = null;
  private pic = null;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/users?sort=points,desc').subscribe(data => {
      this.userData = data;
      console.log(data);
    });
    //for(let user of this.userData)
    {
      this.http.get('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/image?username=this.user.username').subscribe(data => {
      this.pic = data;
      console.log(data);
    });
    }
    
  }
}
