import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTalentpagePageRoutingModule } from './add-talentpage-routing.module';

import { AddTalentpagePage } from './add-talentpage.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddTalentpagePageRoutingModule
  ],
  declarations: [AddTalentpagePage]
})
export class AddTalentpagePageModule {}
