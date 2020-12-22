import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { FCM } from '@ionic-native/fcm/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {
  user: any
  mess: any = []
  roomkey: any
  offStatus: any
  @ViewChild("content") content: IonContent;
  nickname: any
  chats: any = []
  token:any
  token2:any
  reversedList: Array<any> = []
  data = { roomname: "", type: "", nickname: "", message: '' }
  ref = firebase.database().ref('chatrooms/');
  constructor(public navCtrl: NavController,
    public alert: AlertController,
    private router: Router,
    private storage: Storage,
    private route: ActivatedRoute,
    private fcm: FCM,
    private http: HttpClient,

  ) {

    fcm.onNotification().subscribe(datas => {

      console.log("fcm data", datas.name);
      this.mess.push({text: datas.payload, user: datas.name})
      console.log("fcm datas", this.mess);
      this.storage.set("chat", this.mess)
      this.data.message = ""
      if (datas.wasTapped) {
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
      }
    });

    fcm.onTokenRefresh().subscribe(token => {
      console.log("bakit wala?");
      console.log("check ko din dito kung meron", token);
    });

    storage.get("chat").then(chat=>{
      if(chat == null){
        this.mess = []
      }else{
        this.mess = chat
      console.log("chat :", this.mess)
      }
      
    })


        this.roomkey = "1"
        this.data.type = "message"
        this.data.nickname = this.nickname
        console.log("nick nya", this.user)


        // let joinData = firebase.database().ref("chatrooms/1/chats").push();
        // joinData.set({
        //   type: "join",
        //   user: this.user,
        //   message: "",
        //   sendDate: Date()
        // });

        this.data.message = ""

        // firebase.database().ref('chatrooms/1/chats').on("value", resp => {
        //   this.chats = []
        //   let tempchats = resp.val();

        //   for (let key in tempchats) {
        //     this.chats.push({ data: tempchats[key], key: key })
        //   }
        //   this.reversedList = this.chats;
        //   console.log("ayaw pa nga", this.reversedList)
        //   setTimeout(() => {
        //     if (this.offStatus === false) {
        //       this.content.scrollToBottom(300)
        //     }
        //   }, 1000
        //   )
        // })
      // })
    
    // this.ref = firebase.database().ref('messages');
  }

  // sendMessage(){
  //   let newData = firebase.database().ref('chatrooms/1/chats').push();
  //   newData.set({
  //     type: this.data.type,
  //     user:this.user,
  //     message:this.data.message,
  //     sendDate:Date()
  //   })
  //   console.log("user", this.user)
  //   this.data.message = ""
  // }

  // exitChat(){
  //   let exitData =firebase.database().ref('chatrooms/1/chats').push();
  //   exitData.set({
  //     type: "exit",
  //     user:this.nickname,
  //     message:this.nickname+' has exited this room',
  //     sendDate:Date()
  //   })
  //   this.offStatus = true;
  //   this.router.navigate(['main-page',{nickname:this.nickname}])
  // }
  back() {
    this.navCtrl.back()
  }
  // addRoom(){
  //   let newData = this.ref.push();
  //   newData.set({
  //     roomname:this.data.roomname
  //   });
  //   this.navCtrl.pop();
  // }
  datas: any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  sendMessage() {
    let api3 = `http://ninth-flaxen-bugle.glitch.me/send?message=${this.data.message}&name=${this.user}&user1=${this.token}&user2=${this.token2}`
    this.http.get(api3, this.httpOptions).subscribe((data: any) => {
      console.log("data from glitch", data)
    })
  }

  ngOnInit() {

    this.fcm.getToken().then((data: any) => {
      this.storage.get("user").then((user: any) => {
        this.user = user.first_name
        console.log("use::",this.user)
        if(this.user == "Joshua"){
          this.nickname = "Jolina"
        }else{
          this.nickname = "Joshua"
        }

      console.log("uuuussseerr",this.user)
      if(this.user == "Joshua"){
        this.token = data
        console.log("token:", data)
      }else if(this.user == "Jolina"){
        this.token2 = data
        console.log("token:", data)
      }
      
    });
  })
  }
  // ionViewDidLoad() {

}