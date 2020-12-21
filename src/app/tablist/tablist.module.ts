import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablistPageRoutingModule } from './tablist-routing.module';

import { TablistPage } from './tablist.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TablistPageRoutingModule
  ],
  declarations: [TablistPage]
})
export class TablistPageModule {}
