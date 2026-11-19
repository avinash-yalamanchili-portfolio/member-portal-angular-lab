import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MedicationRenewalCountPipe } from './medication-renewal-count.pipe';
import { MedicationsComponent } from './medications.component';

describe('MedicationsComponent', () => {
  let fixture: ComponentFixture<MedicationsComponent>; let component: MedicationsComponent;
  beforeEach(async () => { localStorage.clear(); await TestBed.configureTestingModule({ declarations: [MedicationsComponent, MedicationRenewalCountPipe], imports: [CommonModule, FormsModule, RouterTestingModule] }).compileComponents(); fixture = TestBed.createComponent(MedicationsComponent); component = fixture.componentInstance; });
  it('filters prescriptions needing renewal', () => { component.selectedStatus = 'Renewal needed'; expect(component.filteredMedications.length).toBe(1); expect(component.filteredMedications[0].refillsRemaining).toBe(0); });
  it('filters household prescriptions by member', () => { component.selectedMember = 'Demo Dependent'; expect(component.filteredMedications.length).toBe(1); });
});
