import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  app_title: string = 'Tasks & Projects App';

}
