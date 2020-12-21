import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular'
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-talentpage',
  templateUrl: './add-talentpage.page.html',
  styleUrls: ['./add-talentpage.page.scss'],
})
export class AddTalentpagePage implements OnInit {

  constructor(public navParams: NavParams,
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }

  get first_name() {
    return this.addtalent.get("first_name");
  } 
  get last_name(){
    return this.addtalent.get("last_name");
  }
  get email(){
    return this.addtalent.get("email");
  }

  addtalent = this.formBuilder.group({
    id: [8,],
    first_name: ['', [Validators.required, Validators.maxLength(30)]],
    last_name: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
    avatar: ["https://reqres.in/img/faces/11-image.jpg", [Validators.required, Validators.maxLength(30)]],
  });

  submit(){
    this.modalCtrl.dismiss({
      "talent": this.addtalent.value 
    });
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      "close": true
    });
  }
}
