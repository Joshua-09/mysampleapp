import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fcm:FCM) {}

  getToken(){
    this.fcm.getToken().then(token => {
      console.log("check ko lang kung merong token",token);
    });
  }
}
