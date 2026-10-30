import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterModule.forRoot([])]
    }).compileComponents();
  });

  it('should render the application shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.title).toBe('Member Portal');
    expect(fixture.nativeElement.querySelector('.brand').textContent).toContain(
      'Member Portal'
    );
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
  });
});
