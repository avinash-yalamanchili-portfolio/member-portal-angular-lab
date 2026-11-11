import { TestBed } from '@angular/core/testing';
import { ClientStorageService } from './client-storage.service';

describe('ClientStorageService', () => {
  let service: ClientStorageService;

  beforeEach(() => {
    localStorage.clear();
    service = TestBed.inject(ClientStorageService);
  });

  afterEach(() => localStorage.clear());

  it('should store, retrieve, and remove values', () => {
    expect(service.set('portal.preference', { side: 'back' })).toBeTrue();
    expect(service.get('portal.preference', { side: 'front' })).toEqual({ side: 'back' });
    expect(service.remove('portal.preference')).toBeTrue();
    expect(service.get('portal.preference', 'fallback')).toBe('fallback');
  });

  it('should return the fallback for invalid JSON', () => {
    localStorage.setItem('portal.invalid', '{invalid');
    expect(service.get('portal.invalid', 'safe')).toBe('safe');
  });
});
