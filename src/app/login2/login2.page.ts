import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  user:any =[]

  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  public errorMessages = {
    email:[
      {type: 'required', message: 'Email is required'}
    ],
    password:[
      {type: 'required', message: 'Password is required' }
    ]
  };

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  back(){
    this.router.navigate(['login']);
  }

  private isSubmitted = false
  public onSubmit(){
    console.log("enter")
    this.isSubmitted = true
    if (this.loginForm.valid) {
      this.storage.get("regForm").then((val)=>{
        this.user = val
        if(this.user.email != this.loginForm.value.email){
          console.log("email is not match");
        }
        if(this.user.password != this.loginForm.value.password){
          console.log("password is not match")
        }
        if((this.user.email == this.loginForm.value.email) && (this.user.password == this.loginForm.value.password)){
          console.log("Navigate to Main page!")
          this.router.navigate(['main-page'])
        }
      })
    }else{
      console.log("not okay")
    }
  }
}
