import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { FormBuilder, Validators } from '@angular/forms';
import { Platform, PopoverController } from '@ionic/angular';
// import { PopoverComponent} from '../popover/popover.component'
// import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { ModalPage } from '../modal/modal.page'; 
import { ToastController } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Storage } from '@ionic/storage';

// import { GeneralService } from 'src/app/general.service';

// import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  deviceID: String = ""
  deviceToken:any
  constructor(
    private fcm:FCM,
    private formBuilder: FormBuilder,
    public popoverController: PopoverController,
    // private datePicker: DatePicker, 
    private router: Router,
    private storage: Storage,
    // private http: HttpClient,
    public modalCtrl: ModalController,
    public toastController: ToastController,
    private uniqueDeviceID: UniqueDeviceID,
    public plt: Platform
    // private gen: GeneralService,
  ) {
    this.fcm.getToken().then(data=>{
      this.storage.set("deviceToken", data)
    })
    this.storage.get("deviceToken").then(data=>{
      this.deviceToken = data
      console.log("My Devide Token is : ", this.deviceToken);
    })
    this.plt.ready().then(()=>{
      this.fcm.onNotification().subscribe(data =>{
        if(data.wasTapped){
          console.log("RECEIVED IN BACKGROUND")
        }else{
          console.log("RECEIVED IN FOREGROUND")
        };
        });
        
    })
    this.fcm.hasPermission().then(hasPermission => {
      if (hasPermission) {
        console.log("Has permission!");
      }
    })
    this.storage.get("deviceID").then((val) => {
      console.log("My Devide ID is : ", val);
    });
  }

  subscripeToTopic(){
    this.fcm.subscribeToTopic('enappd');
  }

 

  onClick(){
    this.storage.set("deviceID", "7bcc9893-a1b9-4ef1-b78a-fce6ff9cd82e");
    this.storage.set("deviceToken", "febyklovsFI:APA91bHxb0llHsNAsVE7Ze2ERb9hQlbQukM7-A7Eej1uWJJLJr42EKoZaXR5Oh1sFQd-wz_nxGT3xVfDstHPcBC7UvAzRHXscPw68qUfI9CR1XZnop7wHt7CWz0tJfUpB3dGagRsZkcB");
    this.storage.get("deviceID").then((val)=>{
      this.deviceID = val;
    });
  }


  // Unique Device ID   7bcc9893-a1b9-4ef1-b78a-fce6ff9cd82e

  // getToken(){
  //   this.fcm.getToken().then(token => {
  //     backend.regis
  //     console.log("check ko lang kung merong token",token);
  //   });
  // }

  url = 'http://devapi.supershow.app';

  // @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>; 
  // getDetails(id) {
  //   return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  // }

  myVariable: String = "";
  map: any;
  public myValue: boolean = false;
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please complete your form',
      duration: 2000
    });
    toast.present();
  }


  hobbies = [
    { name: 'dancing' },
    { name: 'reading' },
    { name: 'singing' },
    { name: 'sports' },
  ];

  change() {
    this.myValue = !this.myValue;
    console.log(this.myValue);
  }

  // async showModal() {  
  //   const modal = await this.modalCtrl.create({  
  //     component: ModalPage  
  //   });  
  //   return await modal.present();  
  // }  

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  go() {
    this.router.navigate(['home']);
  }


  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponent,
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }

  get firstName() {
    return this.registrationForm.get("firstName");
  }
  get password() {
    return this.registrationForm.get("password");
  }

  get middleName() {
    return this.registrationForm.get("middleName");
  }

  get lastName() {
    return this.registrationForm.get("lastName");
  }
  get numberSS() {
    return this.registrationForm.get("numberSS");
  }
  get about() {
    return this.registrationForm.get("about");
  }

  get birthDate() {
    return this.registrationForm.get("birthDate");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get gender() {
    return this.registrationForm.get("gender");
  }

  get suffix() {
    return this.registrationForm.get("suffix");
  }

  get toggle() {
    return this.registrationForm.get("toggle");
  }

  get sports() {
    return this.registrationForm.get('hobbies.sports');
  }
  get reading() {
    return this.registrationForm.get('hobbies.reading');
  }
  get dancing() {
    return this.registrationForm.get('hobbies.dancing');
  }
  get singing() {
    return this.registrationForm.get('hobbies.singing');
  }

  public errorMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name cant be longer than 30 characters' },
    ],
    middleName: [
    ],
    toggle: [
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'Last Name cant be longer than 30 characters' }
    ],
    about: [
      // { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'Description cant be longer than 100 characters' }
    ],
    numberSS: [
      { type: 'required', message: 'Number is required' },
      { type: 'maxlength', message: 'Number length should not be above 11' },
      { type: 'minlength', message: 'Number length should not be below 11' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'maxlength', message: 'Password cant be longer than 30 characters' },
      { type: 'minlength', message: 'Password cant be shorter than 8 characters' },
    ],
    birthDate: [
      { type: 'required', message: 'Birth Date is required' },
      // { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    gender: [
      { type: 'required', message: 'Gender is required' },
      // { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    sports: [
    ],
    reading: [
    ],
    dancing: [
    ],
    singing: [
    ],
  };

  registrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    middleName: ['', [Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]],
    numberSS: ['+63', [Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(60),
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    about: ['',],
    // toggle: ['', ],
    birthDate: ['', [Validators.required]],
    gender: ["male", [Validators.required]],
    // suffix: [''],
    hobbies: this.formBuilder.group({
      sports: [false],
      reading: [false],
      dancing: [false],
      singing: [false]
    })
  });

  isSubmitted = false;
  public submit() {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      this.storage.set("regForm", this.registrationForm.value)
      this.router.navigate(['login']);
    } else {
      this.presentToast();
    }

    // let data = {
    //   appkey: 'WGKCSGGW9ryfzLrCc5kt3uRSW5ACa62uDHzpTgd8h969KMHXxFrzp7FdtcfX2bSLjfRw79TXs9e3fJ4JcQAefHpWtVEHUFx23jbd',
    //   device_token: 'febyklovsFI:APA91bHxb0llHsNAsVE7Ze2ERb9hQlbQukM7-A7Eej1uWJJLJr42EKoZaXR5Oh1sFQd-wz_nxGT3xVfDstHPcBC7UvAzRHXscPw68qUfI9CR1XZnop7wHt7CWz0tJfUpB3dGagRsZkcB'
    // }
    // const url = this.url + '/api/token/get';
  }
}
