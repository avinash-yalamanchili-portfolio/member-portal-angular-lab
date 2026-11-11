import { Component } from '@angular/core';
import { PortalDataService } from './shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Member Portal';
  memberInitial = 'M';

  constructor(private readonly portalData: PortalDataService) {}

  get unreadMessageCount(): number {
    return this.portalData.getUnreadMessageCount();
  }
}
