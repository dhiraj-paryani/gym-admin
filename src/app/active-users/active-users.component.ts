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
  images =["char_male_basic.png","char_male_emo.png","char_male_programmer.png"];
  
  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/users/active').subscribe(data => {
      this.userData = data;
      console.log(this.images[Math.floor(Math.random()*3)]);
    // for(let user of this.userData) {
    //   console.log("test");
    //   this.http.get             ('http://gymificationcodeathon-env.8vvmhjujd2.ap-south-1.elasticbeanstalk.com/image?userName=' + user.userName).subscribe(data => {
    //   this.userPics.push(data);
    //   });
    //   console.log("userPics->"+this.userPics);
    // }
    
  });
}

}
