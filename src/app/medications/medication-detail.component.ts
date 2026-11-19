import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientStorageService } from '../shared/client-storage.service';
import { PortalDataService } from '../shared/portal-data.service';
@Component({ standalone:false, selector:'app-medication-detail', templateUrl:'./medication-detail.component.html', styleUrl:'./medication-detail.component.scss' })
export class MedicationDetailComponent {
  readonly medication = this.portalData.getMedicationById(this.route.snapshot.paramMap.get('id') ?? '');
  refillRequested = this.storage.get<boolean>(`refill-request-${this.medication?.id ?? 'missing'}`, false);
  constructor(private readonly route: ActivatedRoute, private readonly portalData: PortalDataService, private readonly storage: ClientStorageService) {}
  requestRefill(): void { this.refillRequested = true; this.storage.set(`refill-request-${this.medication?.id}`, true); }
}
