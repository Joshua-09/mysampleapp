import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
// import { UserProfileService } from '../user-profile.service'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  regForm:any =[];
  api = "https://reqres.in/api/users?page=2"

  constructor(
    private storage: Storage,
    private router: Router,
    private http: HttpClient
    // public crud: UserProfileService  
    ) { }

  ngOnInit() {
    
    // this.crud.getProfile()
    // this.storage.get("regForm").then((val)=>{
    //   this.regForm = val
    // })
  }

  onTap(){
    this.router.navigate(['login2']);
  }
  onClick(){
    this.router.navigate(['home']);
  }

}
