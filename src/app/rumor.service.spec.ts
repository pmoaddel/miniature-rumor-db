import { TestBed } from '@angular/core/testing';

import { RumorService } from './rumor.service';

describe('RumorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RumorService = TestBed.get(RumorService);
    expect(service).toBeTruthy();
  });
});
