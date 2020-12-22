import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule),
    data: {
      preload: true
    },
  },
  {
    path: 'chat-page',
    loadChildren: () => import('./chat-page/chat-page.module').then( m => m.ChatPagePageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'modalpage',
    loadChildren: () => import('./modalpage/modalpage.module').then( m => m.ModalpagePageModule)
  },
  {
    path: 'add-talentpage',
    loadChildren: () => import('./add-talentpage/add-talentpage.module').then( m => m.AddTalentpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
