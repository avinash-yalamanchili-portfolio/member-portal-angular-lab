import { TestBed } from '@angular/core/testing';
import { PortalDataService } from './portal-data.service';

describe('PortalDataService', () => {
  let service: PortalDataService;

  beforeEach(() => {
    service = TestBed.inject(PortalDataService);
  });

  it('should return a claim by id', () => {
    expect(service.getClaimById('DEMO-CLM-001')?.provider).toBe(
      'Example Primary Care'
    );
  });

  it('should return independent claim collections', () => {
    const firstResult = service.getClaims();
    firstResult.pop();

    expect(service.getClaims().length).toBe(4);
  });

  it('should return undefined for an unknown claim', () => {
    expect(service.getClaimById('UNKNOWN')).toBeUndefined();
  });

  it('should return independent covered-member collections', () => {
    const firstResult = service.getCoveredMembers();
    firstResult[0].displayName = 'Changed';
    firstResult.pop();

    expect(service.getCoveredMembers().length).toBe(2);
    expect(service.getCoveredMembers()[0].displayName).toBe('Demo Member');
  });

  it('should track unread messages', () => {
    expect(service.getUnreadMessageCount()).toBe(2);

    service.markMessageRead('DEMO-MSG-001');

    expect(service.getUnreadMessageCount()).toBe(1);
  });

  it('should add a synthetic sent message', () => {
    const sent = service.sendMessage(
      'Demo subject',
      'Synthetic message body',
      'Account'
    );

    expect(sent.folder).toBe('Sent');
    expect(service.getMessages()[0].id).toBe(sent.id);
  });
});
