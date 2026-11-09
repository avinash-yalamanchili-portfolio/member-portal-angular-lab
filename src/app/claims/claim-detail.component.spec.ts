import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClaimDetailComponent } from './claim-detail.component';

describe('ClaimDetailComponent', () => {
  let fixture: ComponentFixture<ClaimDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimDetailComponent],
      imports: [CommonModule, RouterModule.forRoot([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: 'DEMO-CLM-001' }) } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimDetailComponent);
    fixture.detectChanges();
  });

  it('should render the selected claim and cost breakdown', () => {
    expect(fixture.componentInstance.claim?.id).toBe('DEMO-CLM-001');
    expect(fixture.nativeElement.textContent).toContain('Example Primary Care');
    expect(fixture.nativeElement.textContent).toContain('Cost breakdown');
  });
});
