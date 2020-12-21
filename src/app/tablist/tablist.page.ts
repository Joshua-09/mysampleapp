import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AddTalentpagePage } from '../add-talentpage/add-talentpage.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.page.html',
  styleUrls: ['./tablist.page.scss'],
})
export class TablistPage implements OnInit {
  nick:any
  user:any
  constructor(
    private storage: Storage,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.storage.get('user').then((data)=>{
      this.user = data.data
      if(data== "Joshua"){
        this.nick = "Jolina"
      }
      else if(data == "Jolina"){
        this.nick = "Joshua"
      }
    })
  }
  
  // async addpresentModal() {
  //   const modal = await this.modalController.create({
  //     component: AddTalentpagePage,
  //     cssClass: 'modal',
  //     animated: true,
  //     swipeToClose: true,
  //     backdropDismiss: false,
  //     presentingElement: await this.modalController.getTop()
  //   });
  //   modal.onDidDismiss().then((res)=>{
  //     if(res){
  //       console.log("remove")
  //     }else{
  //       this.talents[this.talents.length] = res.data.talent
  //     this.addTalent(this.talents)
  //     }
  //   });
  //   return await modal.present();
  // }

}
