import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular'
import { AlertController } from '@ionic/angular'
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage {
  @Input() talent: any;
  talentinfo: any = []
  constructor(public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private http: HttpClient,
  ) {
    // console.log(navParams.get("talent"));
    this.talentinfo = navParams.get("talent");
    console.log("talentinfo", this.talentinfo)
  }

  getTalentInfo(){
    return this.talentinfo
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      "talent": this.talentinfo
    });
  }
  loader: any = false;
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present()

    if (loading.dismiss()) {
      await this.presentAlert()
    }


    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  async presentAlert() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      animated: true,
      header: 'Are you sure?',
      subHeader: 'You are about to decline this talent',
      mode: "ios",
      backdropDismiss: false,
      buttons: [{
        text: 'OK',  handler: () => {
          
          this.modalCtrl.dismiss({
            "delete": true 
          });
          return true
        }
      }],
    });
    await alert.present();
  }
}
