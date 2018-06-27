import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

 
  private userData = null;
  private userPics = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/users/active').subscribe(data => {
      this.userData = data;
    for(let user of this.userData) {
      this.http.get             ('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/image?userName=' + user.userName).subscribe(data => {
      this.userPics.push(data);
      });
    }

    console.log("Hello"+this.userData);
  });
}

}
