import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortalDataService } from '../shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrl: './claim-detail.component.scss'
})
export class ClaimDetailComponent {
  private readonly claimId = this.route.snapshot.paramMap.get('id') ?? '';
  claim = this.portalData.getClaimById(this.claimId);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly portalData: PortalDataService
  ) {}
}
