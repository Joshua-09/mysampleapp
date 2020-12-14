import { Component, Input } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular'
import { AlertController } from '@ionic/angular'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage  {
  @Input() talent: any;
  constructor(public navParams: NavParams,public modalCtrl: ModalController,public alertController: AlertController,public loadingController: LoadingController) { 
    console.log(navParams.get("talent"));
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
loader:any = false;
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present()

    if(loading.dismiss()){
      await this.presentAlert()
    }

    

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }
  async presentAlert() {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      animated: true,
      header: 'Are you sure?',
      subHeader: 'You are about to decline this talent',
      mode: "ios",
      buttons: ['OK']
    });


    await alert.present();
  }

  
}
