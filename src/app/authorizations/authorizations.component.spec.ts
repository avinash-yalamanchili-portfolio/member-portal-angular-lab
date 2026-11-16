import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthorizationsComponent } from './authorizations.component';

describe('AuthorizationsComponent', () => {
  beforeEach(async () => TestBed.configureTestingModule({
    declarations: [AuthorizationsComponent],
    imports: [CommonModule, FormsModule, RouterModule.forRoot([]), SharedModule]
  }).compileComponents());

  it('should render and filter authorization requests', () => {
    const fixture = TestBed.createComponent(AuthorizationsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.request-card').length).toBe(4);

    fixture.componentInstance.selectFilter('Information needed');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.request-card').length).toBe(1);
  });
});
