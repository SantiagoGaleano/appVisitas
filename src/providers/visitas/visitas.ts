import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database'


/*
  Generated class for the VisitasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisitasProvider {

  constructor(public afBD: AngularFireDatabase ) {
    console.log('Hello VisitasProvider Provider');
  }

  public saveVisit(visit){
    let key = this.afBD.list('/visit/').push(visit).key;
    visit.id = key;
    this.afBD.database.ref('visit/'+ visit.id).set(visit);
  }

  public getVisits(id){
    return this.afBD.object('visit/'+id).valueChanges();
    
}

}
