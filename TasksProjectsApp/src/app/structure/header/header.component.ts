import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslatePipe } from 'src/app/i18n/translate.pipe';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  app_title:string="Tasks & Projects App"

}
