import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  user: any = []
  id: any
  sub: any
  talents: any
    //   { firstName: "Jose", lastName: "Clapis", screenName: "Choy", address: "Imus, Cavite", about: "Young and bold", image: "Rectangle.png" },
    // { firstName: "Paolo", lastName: "Manlangit", screenName: "Manheaven", address: "Molino, Cavite", about: "Silent and dark", image: "Paolo.png" },
    // { firstName: "Zarina", lastName: "Trajico", screenName: "Zar", address: "Centennial, Cavite", about: "TShiny and TStupid", image: "Zarina.png" },
    // { firstName: "Jolina", lastName: "Encarnado", screenName: "Majo", address: "Imus, Cavite", about: "Little and bitter", image: "Jolina.png" }
  getColor(country: any) {
    (2)
    if (country % 2 == 0) {
      return 'green'
    }
    else {
      return 'pink'
    }
  }
  
  constructor(
    public modalController: ModalController,
    private route: ActivatedRoute,
    private http: HttpClient,
    public loadingController: LoadingController
  ) {
    
  }
  loading: any

  async presentModal(index: any) {
    const modal = await this.modalController.create({
      component: ModalpagePage,
      cssClass: 'modal',
      animated: true,
      componentProps: { talent: this.talents[index] },
      swipeToClose: true,
      backdropDismiss: false,
      presentingElement: await this.modalController.getTop()
    });
    modal.onDidDismiss().then((res)=>{
      console.log(res.data)
      let del = res.data
      if(del.delete){
        this.deleteTalent(index)
      }
      // this.deleteTalent(index)
    });
    return await modal.present();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  deleteTalent(id:any){
    let api2 = "https://reqres.in/api/users"
    this.http.delete(api2).subscribe((res)=>{
      console.log(res)
    })
    this.talents.splice(id,1)
  }

  ngOnInit() {
    let api2 = "https://reqres.in/api/users"
    this.http.get(api2).subscribe((params: any) => {
      console.log(this.talents)
      this.talents = params.data
      setTimeout(() => {
        // this.talent.splice(2,1)
    }, 5000);
    })
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("id daw nya", this.id)
      let api = "https://reqres.in/api/users/" + `${this.id}` + "?page=2"
      this.http.get(api).subscribe((response: any) => {
        this.user = response.data
      });
    })
  }



  talentado = {
    id: 69,
    first_name: "Patrick",
    last_name: "Mandapat",
    email: "patrick_mandapat@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg"
  }

  addTalent() {
    let api3 = "https://reqres.in/api/users"
    this.http.post(api3, this.talentado).subscribe((data: any) => {
      console.log(data)
    })
  }
}
