import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ClaimsComponent } from './claims.component';

describe('ClaimsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimsComponent],
      imports: [RouterModule.forRoot([])]
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
    expect(fixture.nativeElement.textContent).toContain('CLM-1761');
  });
});
