import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { FeatureFlagsDirective } from '../../feature-flags/feature-flags.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppRoutingModule, FeatureFlagsDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  app_title: string = 'Tasks & Projects App';

}
