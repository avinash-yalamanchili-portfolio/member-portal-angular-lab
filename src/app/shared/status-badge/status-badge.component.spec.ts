import { TestBed } from '@angular/core/testing';
import { StatusBadgeComponent } from './status-badge.component';

describe('StatusBadgeComponent', () => {
  it('should render a label and tone', async () => {
    await TestBed.configureTestingModule({ declarations: [StatusBadgeComponent] }).compileComponents();
    const fixture = TestBed.createComponent(StatusBadgeComponent);
    fixture.componentInstance.label = 'Approved';
    fixture.componentInstance.tone = 'success';
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Approved');
    expect(fixture.nativeElement.querySelector('.badge').classList).toContain('success');
  });
});
