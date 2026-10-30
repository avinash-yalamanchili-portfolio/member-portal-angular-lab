import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [RouterModule.forRoot([])]
    }).compileComponents();
  });

  it('should render account summary and activity', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.summary-card').length).toBe(3);
    expect(fixture.nativeElement.querySelectorAll('.activity-list li').length).toBe(3);
  });
});
