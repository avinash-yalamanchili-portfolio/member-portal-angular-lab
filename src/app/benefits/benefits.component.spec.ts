import { TestBed } from '@angular/core/testing';
import { BenefitsComponent } from './benefits.component';
import { CommonModule } from '@angular/common';

describe('BenefitsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenefitsComponent],
      imports: [CommonModule]
    }).compileComponents();
  });

  it('should render benefit categories and cost progress', () => {
    const fixture = TestBed.createComponent(BenefitsComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.benefit-card').length).toBe(4);
    expect(fixture.componentInstance.deductibleProgress).toBe(41);
    expect(fixture.nativeElement.textContent).toContain('Essential Plus');
  });
});
