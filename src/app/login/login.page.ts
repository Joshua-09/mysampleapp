import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // regForm:any =[]

  constructor(
    private storage: Storage,
    private router: Router,
    ) { }

  ngOnInit() {
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
