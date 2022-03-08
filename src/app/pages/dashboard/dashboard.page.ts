import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from 'src/app/components/language-popover/language-popover.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  /**Set parameters showing the elements in the pages */
  params = {
    name: 'Jesus'
  };
  
  ngOnInit() {
  }

  async openLanguagePopOver(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }
}
