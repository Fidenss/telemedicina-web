import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  

  ngOnInit() {
  }

  constructor(public menuCtrl: MenuController, 
              public router: Router) {

  }


  redirect(){
    this.router.navigateByUrl('fidens/dashboard');
  }

  // Oculta el menu lateral

  // antes de cargar la pagina
  ionViewWillEnter() {
      this.menuCtrl.enable( false )
  }

  // al salir de la pagina
  ionViewDidLeave() {
      this.menuCtrl.enable( true )
  }

}
