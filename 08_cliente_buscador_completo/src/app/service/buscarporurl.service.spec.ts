import { TestBed } from '@angular/core/testing';

import { BuscarporurlService } from './buscarporurl.service';

describe('BuscarporurlService', () => {
  let service: BuscarporurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarporurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
