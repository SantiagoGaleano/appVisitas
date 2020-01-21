import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { VisitasProvider } from '../../providers/visitas/visitas';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  
  gestion:string = null
  idSelect:any;
  lat: number
  lon: number
  filtermonthwise: any;
  prueba: any;
  

  visit = {id:0, credit:null, name:null, location:null, observation:null, management:null, typification:null, contact:null, gaming:null, lat:null, lon: null}
  


  constructor(public navCtrl: NavController,
               afDB: AngularFireDatabase,
               public visitasProvider: VisitasProvider,
               public geolocation:Geolocation,
               public alertCtrl: AlertController
               ) {

                this.getGeolocation()

                console.log(this.visitasProvider.getVisits(this.visit.id))
                console.log(this.visit.management);
                
                
                
                
    
               
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Confirmar',
      message: 'Seguro desea enviar los datos ingresados',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Enviar',
          handler: () => {
            console.log('Agree clicked');
            this.save()
          }
        }
      ]
    });
    confirm.present();
  }




 

  onChange(selectedValue){
    this.prueba = selectedValue
    console.info("Selected:",this.prueba);
    return this.prueba
  }

  onChangeTwo(select){
    console.log('prueba',select);
    this.onChange(this.prueba);


    if ( this.onChange(this.prueba) == "Contacto Directo" && select == "renuente") {
      this.visit.observation = 'Se contacta el titular, renuente a la visita y al pago de la entidad indica que';

    }
    else if(this.onChange(this.prueba) == "Contacto Directo" && select == "voluntad"){
      this.visit.observation = 'Se contacta  titular, con voluntad de pago indica que';

    }

    else if(this.onChange(this.prueba) == "Contacto Directo" && select == "Presión"){
      this.visit.observation = 'Se contacta  titular, indica que';

    }

    else if(this.onChange(this.prueba) == "Mensaje" && select == "Posible Fallecido"){
      this.visit.observation = 'Mensaje se ubica a un tercero el cual indica que el titular esta fallecido';

    }

    else if(this.onChange(this.prueba) == "Mensaje" && select == "Mensaje Tercero"){
      this.visit.observation = 'Mensaje, se deja carta y mensaje con un tercerto/familia el cual indica que';

    }

    else if(this.onChange(this.prueba) == "Sin contacto" && select == "Dirección incompleta"){
      this.visit.observation = 'Sin contacto, dirección incompleta falta';

    }

    else if(this.onChange(this.prueba) == "Sin contacto" && select == "Carta Bajo Puerta"){
      this.visit.observation = 'Sin contacto, se timbra/golpea nadie atiende se deja carta bajo puerta';

    }

    else if(this.onChange(this.prueba) == "Sin contacto" && select == "No vive/No trabaja"){
      this.visit.observation = 'Sin contacto, se pregunta por tiutal indica que No Vive/No trabaja';

    }

    else if(this.onChange(this.prueba) == "Sin contacto" && select == "Direccion inexistente"){
      this.visit.observation = 'Sin contacto, dirección inexistente se busca dirección en la zona sin resultado';

    }

    else if(this.onChange(this.prueba) == "Sin contacto" && select == "Alto Riesto/Dificil Acceso"){
      this.visit.observation = 'Sin contacto, zona de alto riesgo/dificil acceso no es posible llegar a la dirección ya que ';

    }

    else if(this.onChange(this.prueba) == "Sin contacto" && select == "Carta Bajo Puerta"){
      this.visit.observation = 'Sin contacto, en porteria insisten sin respuesta, se deja sobre allí ';

    }

    else if(this.onChange(this.prueba) == "Sin contacto" && select == "No reciben carta"){
      this.visit.observation = 'Sin contacto, en porteria indican que sin dirección completa no es posible recibir sobre ';

    }
    else {
      this.visit.observation = null;
    }


  }


 
  

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;
    });
  }

  


  save(){
    this.visit.lat = this.lat;
    this.visit.lon = this.lon;
    console.log(this.visit.lat);
    this.visitasProvider.saveVisit( this.visit)
    console.log(
      this.visit.credit,
      this.visit.name,
      this.visit.location,
      this.visit.observation,
      this.visit.management,
      this.visit.typification,
      this.visit.contact,
      
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
   
    console.log(this.visit.credit)
  }
}
