import { TestBed } from '@angular/core/testing';

import { MLApiService } from './mlapi.service';

describe('MLApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MLApiService = TestBed.get(MLApiService);
    expect(service).toBeTruthy();
  });
});
