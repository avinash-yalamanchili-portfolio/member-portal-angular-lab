import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthorizationDetailComponent } from './authorization-detail.component';

describe('AuthorizationDetailComponent', () => {
  it('should render the request timeline', async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorizationDetailComponent],
      imports: [CommonModule, RouterModule.forRoot([]), SharedModule],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ id: 'DEMO-AUTH-001' }) } } }]
    }).compileComponents();
    const fixture = TestBed.createComponent(AuthorizationDetailComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.timeline li').length).toBe(3);
    expect(fixture.nativeElement.textContent).toContain('Diagnostic MRI');
  });
});
