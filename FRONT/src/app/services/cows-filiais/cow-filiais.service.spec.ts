import { TestBed } from '@angular/core/testing';

import { CowFiliaisService } from './cow-filiais.service';

describe('CowFiliaisService', () => {
  let service: CowFiliaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CowFiliaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
