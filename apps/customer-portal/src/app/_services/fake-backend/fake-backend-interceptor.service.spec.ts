import { TestBed, inject } from '@angular/core/testing';

import { FakeBackendInterceptorService } from './fake-backend-interceptor.service';

describe('FakeBackendInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeBackendInterceptorService]
    });
  });

  it('should be created', inject([FakeBackendInterceptorService], (service: FakeBackendInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
