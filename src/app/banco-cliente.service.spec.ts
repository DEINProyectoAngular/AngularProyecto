import { TestBed } from '@angular/core/testing';

import { BancoClienteService } from './banco-cliente.service';

describe('BancoClienteService', () => {
  let service: BancoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
