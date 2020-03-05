import { TestBed } from '@angular/core/testing';

import { DeviceCatalogService } from './devices.service';

describe('DeviceCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceCatalogService = TestBed.get(DeviceCatalogService);
    expect(service).toBeTruthy();
  });
});
