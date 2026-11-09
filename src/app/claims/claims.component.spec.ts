import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClaimsComponent } from './claims.component';

describe('ClaimsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimsComponent],
      imports: [CommonModule, FormsModule, RouterModule.forRoot([])]
    }).compileComponents();
  });

  it('should render all claims by default', () => {
    const fixture = TestBed.createComponent(ClaimsComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.claim-row').length).toBe(3);
  });

  it('should filter claims by status', () => {
    const fixture = TestBed.createComponent(ClaimsComponent);
    fixture.componentInstance.selectFilter('In review');
    fixture.detectChanges();

    expect(fixture.componentInstance.filteredClaims.length).toBe(1);
    expect(fixture.nativeElement.querySelectorAll('.claim-row').length).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('DEMO-CLM-003');
  });

  it('should search claims by provider', () => {
    const fixture = TestBed.createComponent(ClaimsComponent);
    fixture.componentInstance.searchTerm = 'diagnostic';
    fixture.detectChanges();

    expect(fixture.componentInstance.filteredClaims.length).toBe(2);
  });
});
