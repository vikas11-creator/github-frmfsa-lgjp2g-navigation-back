import { Component } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public navigation: NavigationService) {}
}
