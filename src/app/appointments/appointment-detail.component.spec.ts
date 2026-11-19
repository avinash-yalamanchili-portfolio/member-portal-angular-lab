import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppointmentDetailComponent } from './appointment-detail.component';

describe('AppointmentDetailComponent', () => {
  beforeEach(() => localStorage.clear());
  it('persists checklist progress', async () => { await TestBed.configureTestingModule({ declarations: [AppointmentDetailComponent], imports: [CommonModule, RouterTestingModule], providers: [{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => 'DEMO-APT-001' } } } }] }).compileComponents(); const component = TestBed.createComponent(AppointmentDetailComponent).componentInstance; component.toggleItem('insurance-card'); expect(component.completedItems).toContain('insurance-card'); expect(component.completionPercent).toBe(33); });
});
