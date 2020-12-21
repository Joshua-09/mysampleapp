import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { AddTalentpagePage } from '../add-talentpage/add-talentpage.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
// import { timer } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  user: any = []
  id: any
  sub: any
  
  loading = false
  show = true
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
    private router: Router,
    public loadingController: LoadingController,
    private storage: Storage
  ) {
    
  }

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

  async addpresentModal(index: any) {
    const modal = await this.modalController.create({
      component: AddTalentpagePage,
      cssClass: 'modal',
      animated: true,
      swipeToClose: true,
      backdropDismiss: false,
      presentingElement: await this.modalController.getTop()
    });
    modal.onDidDismiss().then((res)=>{
      if(res){
        console.log("remove")
      }else{
        this.talents[this.talents.length] = res.data.talent
      this.addTalent(this.talents)
      }
    });
    return await modal.present();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  back(){
    this.router.navigate(['login2']);
  }

  deleteTalent(id:any){
    let api2 = "https://reqres.in/api/users"
    this.http.delete(api2).subscribe((res)=>{
      console.log(res)
    })
    this.talents.splice(id,1)
  } 

  ngOnInit() {
    this.storage.get("user").then((data:any)=>{
      this.user = data
    })
    this.loading =true
    // this.cd.detectChanges();
    let api2 = "https://reqres.in/api/users"
    this.http.get(api2).subscribe((params: any) => {
      // this.talents = params.data
      
      setTimeout(() => {
        
        this.talents = params.data
        this.loading = false
        // this.talent.splice(2,1)
        console.log(this.talents)
    },1500);
    })
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   console.log("id daw nya", this.id)
    //   let api = "https://reqres.in/api/users/" + `${this.id}` + "?page=2"
    //   this.http.get(api).subscribe((response: any) => {
    //     this.user = response.data
    //   });
    // })
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.show = false
      console.log('Async operation has ended');
     
      this.loading =true
    // this.cd.detectChanges();
    let api2 = "https://reqres.in/api/users"
    this.http.get(api2).subscribe((params: any) => {
      // this.talents = params.data
      
      setTimeout(() => {
        this.loading = false
        this.show = true
        this.talents = params.data

        // this.talent.splice(2,1)
        console.log(this.talents)
    },1500);
    })
      event.target.complete();
    }, 2000);
  }

  talentado = {
    id: 69,
    first_name: "Patrick",
    last_name: "Mandapat",
    email: "patrick_mandapat@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg"
  }

    public addTalent(talent:any) {
      let api3 = "https://reqres.in/api/users"
      this.http.post(api3, talent).subscribe((data: any) => {
        console.log(data)
      })
    }

  chatPage(){
    let nick
    console.log("user",this.user.first_name)
    if(this.user.first_name == "Joshua"){
      nick = "Jolina"
    }if(this.user.first_name == "Jolina"){
      nick = "Joshua"
    }
    console.log("nicksu",nick)
    this.router.navigate(["chat-page/",nick])
  }
  }

