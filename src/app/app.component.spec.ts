import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CommonModule, RouterModule.forRoot([])]
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
    expect(fixture.nativeElement.querySelector('.nav-badge').textContent).toContain(
      '2'
    );
  });
});
