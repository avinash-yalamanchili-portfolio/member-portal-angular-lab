import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortalDataService } from '../shared/portal-data.service';
import { AuthorizationStatus, PriorAuthorization } from '../shared/portal.models';
import { StatusTone } from '../shared/status-badge/status-badge.component';

@Component({
  standalone: false,
  selector: 'app-authorization-detail',
  templateUrl: './authorization-detail.component.html',
  styleUrl: './authorization-detail.component.scss'
})
export class AuthorizationDetailComponent {
  readonly authorization: PriorAuthorization | undefined;

  constructor(route: ActivatedRoute, portalData: PortalDataService) {
    this.authorization = portalData.getAuthorizationById(route.snapshot.paramMap.get('id') ?? '');
  }

  statusTone(status: AuthorizationStatus): StatusTone {
    if (status === 'Approved') return 'success';
    if (status === 'Denied') return 'danger';
    if (status === 'Information needed') return 'warning';
    if (status === 'In review') return 'info';
    return 'neutral';
  }
}
