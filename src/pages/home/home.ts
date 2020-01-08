import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  visit = {id:0, credit:null, name:null, location:null, observation:null, management:null, typification:null, contact:null}
  


  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {

  }

  pruebaInfo(){
    console.log
  }

  clear(){
    this.visit.credit = null;
    this.visit.name = null;
    this.visit.location = null;
    this.visit.observation = null;
    this.visit.management = null;
    this.visit.typification = null;
    this.visit.contact= null;
  }
}
