import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [CommonModule, RouterModule.forRoot([])]
    }).compileComponents();
  });

  it('should render account summary and activity', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.summary-card').length).toBe(4);
    expect(fixture.nativeElement.querySelectorAll('.activity-list li').length).toBe(3);
  });
});
