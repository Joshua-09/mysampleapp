import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
// import { FCM } from '@ionic-native/fcm/ngx';
// import { HttpClientModule } from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    // HttpClientModule
    // FCM
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
