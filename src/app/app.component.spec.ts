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
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the project title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Member Portal Angular Lab'
    );
  });

  it('should render sample member details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Jordan Lee');
    expect(compiled.textContent).toContain('LAB-1001');
  });

  it('should hide member details when the button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector(
      '.toggle-button'
    ) as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.showDetails).toBeFalse();
    expect(fixture.nativeElement.querySelector('.member-details')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain(
      'Member details are hidden.'
    );
  });
});
