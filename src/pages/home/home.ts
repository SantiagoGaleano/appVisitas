import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { VisitasProvider } from '../../providers/visitas/visitas';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  gestion: null;

  visit = {id:0, credit:null, name:null, location:null, observation:null, management:null, typification:null, contact:null, gaming:null}
  


  constructor(public navCtrl: NavController,
               afDB: AngularFireDatabase,
               public visitasProvider: VisitasProvider
               ) {

  }

  save(){
    console.log(
      this.visit.credit,
      this.visit.name,
      this.visit.location,
      this.visit.observation,
      this.visit.management,
      this.visit.typification,
      this.visit.contact,
      this.gestion
      )
    
    this.clear()
    
  }

  clear(){
    this.visit.credit = null;
    this.visit.name = null;
    this.visit.location = null;
    this.visit.observation = null;
    this.visit.management = null;
    this.visit.typification = null;
    this.visit.contact= null;
    this.gestion = null;
    console.log(this.visit.credit)
  }
}
