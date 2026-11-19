import { Component } from '@angular/core';
import { AppointmentStatus, CareAppointment } from '../shared/portal.models';
import { PortalDataService } from '../shared/portal-data.service';

@Component({
  standalone: false,
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  readonly appointments = this.portalData.getAppointments();
  readonly filters: Array<'All' | AppointmentStatus> = ['All', 'Upcoming', 'Completed', 'Cancelled'];
  selectedFilter: 'All' | AppointmentStatus = 'Upcoming';
  searchTerm = '';

  constructor(private readonly portalData: PortalDataService) {}

  get filteredAppointments(): CareAppointment[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.appointments.filter((appointment) => {
      const matchesFilter = this.selectedFilter === 'All' || appointment.status === this.selectedFilter;
      const matchesSearch = !query || [appointment.providerName, appointment.specialty, appointment.memberName, appointment.reason]
        .some((value) => value.toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });
  }
}
