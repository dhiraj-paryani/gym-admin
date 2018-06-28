import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {


  private userData = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.callBackend();
    setInterval(() => {this.callBackend(); }, 3000);
  }

  callBackend() {
    this.http.get('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/users/active').subscribe(data => {
      this.userData = data;
      for (const user of this.userData) {
        user.userImageURL = `http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/image?userName=${user.userName}`;
      }
    }, () => {
      this.userData = null;
    });
  }

}
