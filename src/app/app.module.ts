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
import { Geolocation } from '@ionic-native/geolocation';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import {enviroment} from '../enviroments/enviroment';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    VisitasProvider,
    OneSignal,
    Geolocation,
    PushnotificationProvider,
    AuthenticationProvider,
    
  ]
})
export class AppModule {}
