import { TestBed, inject } from '@angular/core/testing';

import { TablePeriodicServiceService } from './table-periodic-service.service';

describe('TablePeriodicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TablePeriodicServiceService]
    });
  });

  it('should be created', inject([TablePeriodicServiceService], (service: TablePeriodicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
