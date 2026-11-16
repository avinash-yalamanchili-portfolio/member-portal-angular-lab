import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProviderDetailComponent } from './provider-detail.component';

describe('ProviderDetailComponent', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('should render office and accessibility details', async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderDetailComponent],
      imports: [CommonModule, RouterModule.forRoot([]), SharedModule],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ id: 'DEMO-PROVIDER-001' }) } } }]
    }).compileComponents();
    const fixture = TestBed.createComponent(ProviderDetailComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Example Primary Care');
    expect(fixture.nativeElement.textContent).toContain('Wheelchair accessible');
  });
});
