import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the PushnotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushnotificationProvider {

  constructor( private oneSignal: OneSignal, public platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notifications() {
    if (this.platform.is('cordova')) {

      this.oneSignal.startInit('0fb349f5-93b8-4b6e-b2a1-1eed9dde72e7', '27591734907');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
      }
      
    }
    

}
