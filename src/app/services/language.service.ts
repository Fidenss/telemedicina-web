import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, 
              private storage: Storage) { }

  setInitialAppLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    this.storage.create();
    this.storage.get(LNG_KEY).then(val => {
      if (val){
        this.setLanguage(val);
        this.selected = val;        
      }
    }); 
  }

  getLanguages(){
    return [
      { text: 'Español', value: 'es', img: 'assets/icon/es.png' },
      { text: 'English', value: 'en', img: 'assets/icon/en.png' }
    ]
  }

  /** Set value into session var */
  setLanguage(lang) {
    this.translate.use(lang);
    this.selected = lang;
    this.storage.set(LNG_KEY, lang);
  }
}

