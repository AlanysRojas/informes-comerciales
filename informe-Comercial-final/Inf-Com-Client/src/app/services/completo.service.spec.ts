import { TestBed } from '@angular/core/testing';

import { CompletoService } from './completo.service';

describe('CompletoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletoService = TestBed.get(CompletoService);
    expect(service).toBeTruthy();
  });
});
