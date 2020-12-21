import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablistPage } from './tablist.page';

const routes: Routes = [
  {
    path: 'tablist',
    component: TablistPage,
    children:[
      {
        path: 'main-page',
        loadChildren: () => import('../main-page/main-page.module').then( m => m.MainPagePageModule),
        data: {
          preload: true
        },
      },
      {
        path: 'chat-page/:name',
        loadChildren: () => import('../chat-page/chat-page.module').then( m => m.ChatPagePageModule)
      },

    ]
  },
  {
    path: '',
    redirectTo: 'tablist/main-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablistPageRoutingModule {}
