import { Component } from '@angular/core';
import { PortalDataService } from '../shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  member = this.portalData.getMember();
  summaries = this.portalData.getDashboardSummaries();
  recentActivity = this.portalData.getRecentActivity();
  showMemberDetails = true;

  constructor(private readonly portalData: PortalDataService) {}

  toggleMemberDetails(): void {
    this.showMemberDetails = !this.showMemberDetails;
  }
}
