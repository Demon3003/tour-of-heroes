import { TestBed } from '@angular/core/testing';

import { MeassageService } from './meassage.service';

describe('MeassageService', () => {
  let service: MeassageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeassageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
