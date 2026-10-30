import { Component } from '@angular/core';

type ClaimStatus = 'Processed' | 'In review';
type ClaimFilter = 'All' | ClaimStatus;

interface Claim {
  id: string;
  provider: string;
  serviceDate: string;
  service: string;
  status: ClaimStatus;
  billedAmount: number;
  memberResponsibility: number;
}

@Component({
  standalone: false,
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss'
})
export class ClaimsComponent {
  filters: ClaimFilter[] = ['All', 'Processed', 'In review'];
  selectedFilter: ClaimFilter = 'All';

  claims: Claim[] = [
    {
      id: 'CLM-1842',
      provider: 'North Valley Medical Group',
      serviceDate: 'Oct 12, 2026',
      service: 'Office visit',
      status: 'Processed',
      billedAmount: 265,
      memberResponsibility: 35
    },
    {
      id: 'CLM-1789',
      provider: 'Westside Diagnostic Center',
      serviceDate: 'Sep 28, 2026',
      service: 'Laboratory services',
      status: 'Processed',
      billedAmount: 480,
      memberResponsibility: 52
    },
    {
      id: 'CLM-1761',
      provider: 'Community Imaging Partners',
      serviceDate: 'Sep 19, 2026',
      service: 'Diagnostic imaging',
      status: 'In review',
      billedAmount: 740,
      memberResponsibility: 0
    }
  ];

  get filteredClaims(): Claim[] {
    return this.selectedFilter === 'All'
      ? this.claims
      : this.claims.filter((claim) => claim.status === this.selectedFilter);
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
}
