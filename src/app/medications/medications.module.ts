import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MedicationDetailComponent } from './medication-detail.component';
import { MedicationRenewalCountPipe } from './medication-renewal-count.pipe';
import { MedicationsComponent } from './medications.component';

@NgModule({ declarations: [MedicationsComponent, MedicationDetailComponent, MedicationRenewalCountPipe], imports: [CommonModule, FormsModule, RouterModule], exports: [MedicationsComponent, MedicationDetailComponent] })
export class MedicationsModule {}
