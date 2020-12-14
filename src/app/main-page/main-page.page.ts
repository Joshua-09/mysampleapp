import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { IonRouterOutlet } from '@ionic/angular';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  user: any = []
  talent: any = [{firstName: "Jose", lastName: "Clapis", screenName: "Choy", address:"Imus, Cavite", about: "Young and bold", image: "Rectangle.png"},
                {firstName: "Paolo", lastName: "Manlangit", screenName: "Manheaven", address:"Molino, Cavite", about: "Silent and dark", image: "Paolo.png"},
                {firstName: "Zarina", lastName: "Trajico", screenName: "Zar", address:"Centennial, Cavite", about: "TShiny and TStupid", image: "Zarina.png"},
                {firstName: "Jolina", lastName: "Encarnado", screenName: "Majo", address:"Imus, Cavite", about: "Little and bitter", image: "Jolina.png"}]

  constructor(
    private storage: Storage,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  onTapped(){

  }
  async presentModal(index) {
    // console.log(this.talent[index])
    const modal = await this.modalController.create({
      component: ModalpagePage,
      cssClass: 'modal',
      animated: true,
      componentProps: {talent: this.talent[index]},
      swipeToClose: true,
      presentingElement: await this.modalController.getTop() 

    });
    return await modal.present();
  }

  ngOnInit() {
    this.storage.get("regForm").then((val)=>{
      this.user = val
    })
  }


}
