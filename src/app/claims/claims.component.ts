import { Component } from '@angular/core';
import { Claim, ClaimFilter } from '../shared/portal.models';
import { PortalDataService } from '../shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss'
})
export class ClaimsComponent {
  filters: ClaimFilter[] = ['All', 'Processed', 'In review', 'Denied'];
  selectedFilter: ClaimFilter = 'All';
  searchTerm = '';
  claims = this.portalData.getClaims();

  constructor(private readonly portalData: PortalDataService) {}

  get filteredClaims(): Claim[] {
    const normalizedSearch = this.searchTerm.trim().toLowerCase();

    return this.claims.filter((claim) => {
      const matchesStatus =
        this.selectedFilter === 'All' || claim.status === this.selectedFilter;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        claim.id.toLowerCase().includes(normalizedSearch) ||
        claim.provider.toLowerCase().includes(normalizedSearch) ||
        claim.service.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }

  get totalBilled(): number {
    return this.claims.reduce((total, claim) => total + claim.billedAmount, 0);
  }

  get totalMemberResponsibility(): number {
    return this.claims.reduce(
      (total, claim) => total + claim.memberResponsibility,
      0
    );
  }

  selectFilter(filter: ClaimFilter): void {
    this.selectedFilter = filter;
  }

  clearFilters(): void {
    this.selectedFilter = 'All';
    this.searchTerm = '';
  }
}
