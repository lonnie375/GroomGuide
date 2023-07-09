import { TestBed } from '@angular/core/testing';

import { LocalapiservicesService } from './localapiservices.service';

describe('LocalapiservicesService', () => {
  let service: LocalapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
