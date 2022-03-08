import { Component } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/fidens/dashboard', icon: 'home' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' }
  ];

  public appPageExit = [   
    { title: 'Salir', icon: 'log-out' },
  ];

  constructor( public alertCtrl: AlertController,
               public navCtrl: NavController,
               private platform: Platform,
               private languageService: LanguageService,
               private translate: TranslateService
               ) 
               {
                  this.initializeApp();
               }

   initializeApp(){
      this.platform.ready().then(() => {        
        this.languageService.setInitialAppLanguage();
      });
   }

   //alertBox
   async alertConfirm() {
    let alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.message'),

      buttons: [
        {
          text: this.translate.instant('ALERT.btnCancel'), // todo: Diccionario de datos idiomas
          handler: () => { }
        },
        {
          text: this.translate.instant('ALERT.btnOk'),
          handler: () => {            
            this.navCtrl.navigateRoot('/home');
          }
        }
      ]
    });
    await alert.present();
  }

}
