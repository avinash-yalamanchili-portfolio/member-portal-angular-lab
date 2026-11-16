import { Component } from '@angular/core';
import { AuthorizationFilter, AuthorizationStatus, PriorAuthorization } from '../shared/portal.models';
import { PortalDataService } from '../shared/portal-data.service';
import { StatusTone } from '../shared/status-badge/status-badge.component';

@Component({
  standalone: false,
  selector: 'app-authorizations',
  templateUrl: './authorizations.component.html',
  styleUrl: './authorizations.component.scss'
})
export class AuthorizationsComponent {
  readonly filters: AuthorizationFilter[] = ['All', 'In review', 'Information needed', 'Approved', 'Denied'];
  readonly authorizations = this.portalData.getAuthorizations();
  selectedFilter: AuthorizationFilter = 'All';
  searchTerm = '';

  constructor(private readonly portalData: PortalDataService) {}

  get filteredAuthorizations(): PriorAuthorization[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.authorizations.filter((authorization) => {
      const matchesFilter = this.selectedFilter === 'All' || authorization.status === this.selectedFilter;
      const matchesSearch = !query || [authorization.id, authorization.service, authorization.requestingProvider, authorization.memberName]
        .some((value) => value.toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });
  }

  get attentionCount(): number {
    return this.authorizations.filter((item) => item.status === 'Information needed').length;
  }

  get inReviewCount(): number {
    return this.authorizations.filter((item) => item.status === 'In review').length;
  }

  selectFilter(filter: AuthorizationFilter): void {
    this.selectedFilter = filter;
  }

  clearFilters(): void {
    this.selectedFilter = 'All';
    this.searchTerm = '';
  }

  statusTone(status: AuthorizationStatus): StatusTone {
    const tones: Record<AuthorizationStatus, StatusTone> = {
      Submitted: 'neutral',
      'In review': 'info',
      'Information needed': 'warning',
      Approved: 'success',
      Denied: 'danger'
    };
    return tones[status];
  }
}
