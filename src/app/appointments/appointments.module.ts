import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppointmentDetailComponent } from './appointment-detail.component';
import { AppointmentsComponent } from './appointments.component';

@NgModule({
  declarations: [AppointmentsComponent, AppointmentDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AppointmentsComponent, AppointmentDetailComponent]
})
export class AppointmentsModule {}
