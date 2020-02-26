import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFireAuth} from '@angular/fire/auth';
import { HomePage } from '../home/home';
import { User } from '../../models/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage { 
 
 user = {email:'',password:''}

constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public alertCtrl : AlertController) {
   
  }
   login(){

    this.afAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password)
    .then((user) => {
      this.navCtrl.setRoot(HomePage);
      console.log('hola uid',this.afAuth.auth.currentUser.uid);

      
    })
    .catch(err=>{
      if(err.code == "auth/invalid-email"){
        console.log('hola')
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'La dirección de correo electrónico no es valida',
          buttons: ['Aceptar']
        });
        alert.present();

      } else if (err.code == "auth/user-not-found"){
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'El email ingresado no existe',
          buttons: ['Aceptar']
        });
        alert.present();

      } else if(err.code == "auth/wrong-password"){
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'La contraseña ingresada es incorrecta',
          buttons: ['Aceptar']
        });
        alert.present();
      }
      console.log(err);
      
    })

    }

olvido(){
  let auth =this.afAuth.auth.sendPasswordResetEmail(this.user.email).then(function(){
    alert('se ha enviado un correo a su cuenta');
  },function(error){
    console.log(error);
  })
}

}
