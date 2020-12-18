import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';

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
    const firebaseConfig = {
      apiKey: "AIzaSyAHq3AhYLrjV6Hkb8SZl4qHBuG5JXM1MJs",
      authDomain: "sampleapp-71cdf.firebaseapp.com",
      databaseURL: "https://sampleapp-71cdf-default-rtdb.firebaseio.com",
      projectId: "sampleapp-71cdf",
      storageBucket: "sampleapp-71cdf.appspot.com",
      messagingSenderId: "687219073147",
      appId: "1:687219073147:web:30f179cb8417aa4f6542de"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
      // deviceID
    // febyklovsFI:APA91bHxb0llHsNAsVE7Ze2ERb9hQlbQukM7-A7Eej1uWJJLJr42EKoZaXR5Oh1sFQd-wz_nxGT3xVfDstHPcBC7UvAzRHXscPw68qUfI9CR1XZnop7wHt7CWz0tJfUpB3dGagRsZkcB
}
