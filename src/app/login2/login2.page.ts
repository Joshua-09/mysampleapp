import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  user:any =[]
  api = "https://reqres.in/api/users?page=2"
  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
    private router: Router,
    private http: HttpClient,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.user = [{id: 1, first_name: "Joshua", last_name: "Encarnado", email: "joshuaencarnado@email.com", password: "Qq123456789"},
    {id:2, first_name: "Jolina", last_name: "Galagar", email:"jolinagalagar@email.com", password:"Qq123456789"}
  ]
  
    // this.http.get(this.api).subscribe((response:any) => {
    //   this.user = response.data
    //   console.log(this.user[0].email)
    // });
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
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  private isSubmitted = false
  public onSubmit(){
    console.log("enter")
    this.isSubmitted = true
    if (this.loginForm.valid) {
      for(let x=0;x < this.user.length ; x++){
        console.log(`${this.user[x].first_name}${this.user[x].last_name}`)
        if(this.user[x].email == this.loginForm.value.email){
          console.log("tama una")
          if(this.user[x].password == this.loginForm.value.password){
            this.storage.set("user", this.user[x])
            setTimeout(()=>{
              this.presentLoading().then(()=>{
                this.storage.set("user", this.user[x])
                this.router.navigate(['main-page']);
              })
            },1500
            )
          }
        }
      }
    }else{
      console.log("not okay")
    }
  }
}
