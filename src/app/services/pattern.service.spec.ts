import { TestBed } from '@angular/core/testing';

import { PatternService } from './pattern.service';

describe('PatternService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatternService = TestBed.get(PatternService);
    expect(service).toBeTruthy();
  });
});
