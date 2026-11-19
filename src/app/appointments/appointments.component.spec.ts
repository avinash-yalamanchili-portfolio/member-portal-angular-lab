import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppointmentsComponent } from './appointments.component';

describe('AppointmentsComponent', () => {
  let fixture: ComponentFixture<AppointmentsComponent>; let component: AppointmentsComponent;
  beforeEach(async () => { await TestBed.configureTestingModule({ declarations: [AppointmentsComponent], imports: [CommonModule, FormsModule, RouterTestingModule] }).compileComponents(); fixture = TestBed.createComponent(AppointmentsComponent); component = fixture.componentInstance; });
  it('starts with upcoming visits', () => { expect(component.filteredAppointments.length).toBe(2); expect(component.filteredAppointments.every((item) => item.status === 'Upcoming')).toBeTrue(); });
  it('filters by provider search', () => { component.selectedFilter = 'All'; component.searchTerm = 'diagnostic'; expect(component.filteredAppointments.length).toBe(1); });
});
