import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//plugins

import { OneSignal } from '@ionic-native/onesignal';

//firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyA_qjoRd6dg04hvMH8DLhNiuNtoZr1e5_A",
  authDomain: "appvisitas-5ecbb.firebaseapp.com",
  databaseURL: "https://appvisitas-5ecbb.firebaseio.com",
  storageBucket: "appvisitas-5ecbb.appspot.com",
  messagingSenderId: '329864455637'
};

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisitasProvider } from '../providers/visitas/visitas';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    VisitasProvider,
    OneSignal,
    PushnotificationProvider
  ]
})
export class AppModule {}
