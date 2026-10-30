import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the member dashboard', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome back, Jordan'
    );
    expect(compiled.textContent).toContain('Active coverage');
    expect(compiled.querySelectorAll('.summary-card').length).toBe(3);
    expect(compiled.querySelectorAll('.activity-list li').length).toBe(3);
  });

  it('should hide member details when requested', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector(
      '.secondary-button'
    ) as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.showMemberDetails).toBeFalse();
    expect(fixture.nativeElement.querySelector('#member-details')).toBeNull();
    expect(button.textContent).toContain('Show details');
  });
});
