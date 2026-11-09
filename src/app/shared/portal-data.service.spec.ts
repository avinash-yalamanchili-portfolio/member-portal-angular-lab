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
});
