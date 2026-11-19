import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientStorageService } from '../shared/client-storage.service';
import { PortalDataService } from '../shared/portal-data.service';

@Component({ standalone: false, selector: 'app-appointment-detail', templateUrl: './appointment-detail.component.html', styleUrl: './appointment-detail.component.scss' })
export class AppointmentDetailComponent {
  readonly appointment = this.portalData.getAppointmentById(this.route.snapshot.paramMap.get('id') ?? '');
  readonly storageKey = `appointment-checklist-${this.appointment?.id ?? 'missing'}`;
  completedItems = this.storage.get<string[]>(this.storageKey, []);
  confirmed = this.storage.get<boolean>(`appointment-confirmed-${this.appointment?.id ?? 'missing'}`, false);

  constructor(private readonly route: ActivatedRoute, private readonly portalData: PortalDataService, private readonly storage: ClientStorageService) {}

  toggleItem(id: string): void {
    this.completedItems = this.completedItems.includes(id) ? this.completedItems.filter((item) => item !== id) : [...this.completedItems, id];
    this.storage.set(this.storageKey, this.completedItems);
  }

  confirm(): void {
    this.confirmed = true;
    this.storage.set(`appointment-confirmed-${this.appointment?.id}`, true);
  }

  get completionPercent(): number {
    const total = this.appointment?.checklist.length ?? 0;
    return total ? Math.round((this.completedItems.length / total) * 100) : 100;
  }
}
