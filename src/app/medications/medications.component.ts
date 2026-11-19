import { Component } from '@angular/core';
import { ClientStorageService } from '../shared/client-storage.service';
import { PortalDataService } from '../shared/portal-data.service';
import { Medication, MedicationStatus } from '../shared/portal.models';

@Component({ standalone: false, selector: 'app-medications', templateUrl: './medications.component.html', styleUrl: './medications.component.scss' })
export class MedicationsComponent {
  readonly medications = this.portalData.getMedications();
  selectedStatus: 'All' | MedicationStatus = 'All'; selectedMember = 'All members'; searchTerm = '';
  reminderIds = this.storage.get<string[]>('medication-reminders', []);
  constructor(private readonly portalData: PortalDataService, private readonly storage: ClientStorageService) {}
  get members(): string[] { return ['All members', ...new Set(this.medications.map((item) => item.memberName))]; }
  get filteredMedications(): Medication[] {
    const query = this.searchTerm.toLowerCase().trim();
    return this.medications.filter((item) => (this.selectedStatus === 'All' || item.status === this.selectedStatus) && (this.selectedMember === 'All members' || item.memberName === this.selectedMember) && (!query || `${item.name} ${item.prescriber} ${item.pharmacy}`.toLowerCase().includes(query)));
  }
  toggleReminder(id: string, event: Event): void { event.preventDefault(); event.stopPropagation(); this.reminderIds = this.reminderIds.includes(id) ? this.reminderIds.filter((item) => item !== id) : [...this.reminderIds, id]; this.storage.set('medication-reminders', this.reminderIds); }
}
