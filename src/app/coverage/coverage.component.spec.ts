import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CoverageComponent } from './coverage.component';

describe('CoverageComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      declarations: [CoverageComponent],
      imports: [CommonModule, RouterModule.forRoot([])]
    }).compileComponents();
  });

  afterEach(() => localStorage.clear());

  it('should render covered members and the digital card', () => {
    const fixture = TestBed.createComponent(CoverageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.member-options button').length).toBe(2);
    expect(fixture.nativeElement.querySelector('.digital-card').textContent).toContain('DEMO-MEMBER-001');
  });

  it('should select and persist a covered member', () => {
    const fixture = TestBed.createComponent(CoverageComponent);
    fixture.componentInstance.selectMember('DEMO-PERSON-002');
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedMember.displayName).toBe('Demo Dependent');
    expect(JSON.parse(localStorage.getItem('memberPortal.coverage.selectedMember') ?? 'null')).toBe('DEMO-PERSON-002');
  });

  it('should toggle and persist the card side', () => {
    const fixture = TestBed.createComponent(CoverageComponent);
    fixture.componentInstance.showCardSide('back');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.digital-card').textContent).toContain('Pharmacy information');
    expect(JSON.parse(localStorage.getItem('memberPortal.coverage.cardSide') ?? 'null')).toBe('back');
  });
});
