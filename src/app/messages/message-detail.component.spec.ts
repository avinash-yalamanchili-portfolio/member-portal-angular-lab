import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { MessageDetailComponent } from './message-detail.component';
import { PortalDataService } from '../shared/portal-data.service';

describe('MessageDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageDetailComponent],
      imports: [CommonModule, RouterModule.forRoot([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'DEMO-MSG-001' })
            }
          }
        }
      ]
    }).compileComponents();
  });

  it('should display and mark the selected message as read', () => {
    const fixture = TestBed.createComponent(MessageDetailComponent);
    fixture.detectChanges();
    const portalData = TestBed.inject(PortalDataService);

    expect(fixture.componentInstance.message?.subject).toBe(
      'Claim review completed'
    );
    expect(portalData.getMessageById('DEMO-MSG-001')?.isRead).toBeTrue();
  });
});
