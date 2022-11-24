import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'lang-menu',
  templateUrl: './lang-menu.component.html',
  styleUrls: ['./lang-menu.component.css']
})
export class LangMenuComponent implements OnInit {

  constructor(private translate: TranslateService) {    
  }
  ngOnInit(){}

  setLang(lang: string) {
    this.translate.use(lang);
  }

}
