import { TestBed } from '@angular/core/testing';

import { RoutingInfoServiceService } from './routing-info-service.service';

describe('RoutingInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingInfoServiceService = TestBed.get(RoutingInfoServiceService);
    expect(service).toBeTruthy();
  });
});
