import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  token:any
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private uniqueDeviceID: UniqueDeviceID,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      // deviceID
    // febyklovsFI:APA91bHxb0llHsNAsVE7Ze2ERb9hQlbQukM7-A7Eej1uWJJLJr42EKoZaXR5Oh1sFQd-wz_nxGT3xVfDstHPcBC7UvAzRHXscPw68qUfI9CR1XZnop7wHt7CWz0tJfUpB3dGagRsZkcB


    //   this.token = this.fcm.getToken();
    // console.log('CHECK getToken: ' + this.token);

      // this.fcm.onNotification().subscribe(data => {
      //   console.log(data);
      //   if (data.wasTapped) {
      //     console.log('Received in background');
      //   } else {
      //     console.log('Received in foreground');
      //   }
      // });  

      // this.fcm.onTokenRefresh().subscribe(token => {
      //   console.log("bakit wala?");
      //   console.log("check ko din dito kung meron",token);
      // });
    });
  }
}
