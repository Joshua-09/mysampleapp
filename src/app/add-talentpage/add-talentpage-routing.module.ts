import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTalentpagePage } from './add-talentpage.page';

const routes: Routes = [
  {
    path: '',
    component: AddTalentpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTalentpagePageRoutingModule {}
