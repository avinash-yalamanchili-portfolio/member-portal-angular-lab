import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProviderDirectoryComponent } from './provider-directory.component';

describe('ProviderDirectoryComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      declarations: [ProviderDirectoryComponent],
      imports: [CommonModule, FormsModule, RouterModule.forRoot([]), SharedModule]
    }).compileComponents();
  });
  afterEach(() => localStorage.clear());

  it('should default to in-network providers', () => {
    const fixture = TestBed.createComponent(ProviderDirectoryComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.provider-card').length).toBe(4);
  });

  it('should save providers and filter to favorites', () => {
    const fixture = TestBed.createComponent(ProviderDirectoryComponent);
    fixture.componentInstance.toggleFavorite('DEMO-PROVIDER-002');
    fixture.componentInstance.favoritesOnly = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.provider-card').length).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Example Family Practice');
  });
});
