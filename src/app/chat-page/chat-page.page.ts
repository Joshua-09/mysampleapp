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
  // data:any;
  // ref: any;
  user: any
  roomkey: any
  offStatus: any

  @ViewChild("content") content: IonContent;
  nickname: any
  chats: any = []
  reversedList: Array<any> = []
  data = { roomname: "", type: "", nickname: "", message: '' }
  ref = firebase.database().ref('chatrooms/');
  // name: any;
  // newmessage: any;
  // messagesList: any;
  constructor(public navCtrl: NavController,
    public alert: AlertController,
    private router: Router,
    private storage: Storage,
    private route: ActivatedRoute,
    private fcm: FCM,
    private http: HttpClient,

  ) {

    this.storage.get("user").then((user: any) => {
      this.user = user.first_name

      this.route.params.subscribe((params: any) => {
        this.nickname = params.name


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
      })
    })
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

    let api3 = `http://ninth-flaxen-bugle.glitch.me/send?message=${this.data.message}&name=${this.user}`
    this.http.get(api3, this.httpOptions).subscribe((data: any) => {
      console.log("data from glitch", data)
    })
    // const express = require('express')
    // const app = express();
    // const FCM = require('fcm-node')
    // const serverKey = "AAAAoAFy4Hs:APA91bHeI8kcBmJ0FvHasxldS-PVBs-Zf0SO43bdG127jC3wbulh2ggXxPS-D8wMQzXJl82usx3bp7FPXsGwrgb6jYwFFkYQ42qRLEPT5bRuMYhvAwISZU7EpOjz14NwxZB0d4zhVpzM"
    // app.post('/send-push',(req,res)=>{
    //   const messages = {
    //     registration_ids: [...req.body.userFcmToken],
    //     notification: {
    //       title: req.body.notificationTitle,
    //       body: req.body.notificationBody,
    //       sound:"default",
    //       icon: "ic_launcher",
    //       badge: req.body.notificationBadge ? req.body.notificationBadge : "1",
    //       click_action: 'FCM_PLUGIN_ACTIVITY',
    //     },
    //     priority:req.body.notificationPriority ? req.notificationPriority : "high",
    //     data: {
    //       action:req.body.actionType,
    //       payload:req.body.payload
    //     },


    //   }
    //   const fcm = new FCM(serverKey)

    // fcm.send(messages,(err,response)=>{
    //   if(err){
    //     console.log("Something has gone wrong!", JSON.stringify(err));
    //     res.send(err);
    //   }else{
    //     console.log("Successfully sent with response: ",response);
    //     res.send(response)
    //   }
    // })
    // });

  }
  mess: any=[]
  ngOnInit() {
    this.fcm.getToken().then((data: any) => {
      console.log("token:", data)
    });
    // this.fcm.subscribeToTopic()

    this.fcm.onNotification().subscribe(datas => {
      console.log("fcm data", datas);
      this.mess.push({text: datas.payload, user: datas.name})
      console.log("fcm datas", this.mess[0].text);
      this.data.message = ""
      if (datas.wasTapped) {
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
      }
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      console.log("bakit wala?");
      console.log("check ko din dito kung meron", token);
    });
    
  }
  // ionViewDidLoad() {


  //   //reading data from firebase
  //   this.ref.on('value', data => {
  //     let tmp = [];
  //     data.forEach(data => {
  //       tmp.push({
  //         key: data.key,
  //         name: data.val().name,
  //         message: data.val().message
  //       })
  //     });
  //     this.messagesList = tmp;
  //   });
  // }
  // send() {
  //   // add new data to firebase
  //   this.ref.push({
  //     name: "Jolina",
  //     message: this.newmessage
  //   });
  // }
}