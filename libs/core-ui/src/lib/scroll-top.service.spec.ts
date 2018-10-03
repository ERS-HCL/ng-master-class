import { TestBed, inject } from '@angular/core/testing';

import { ScrollTopService } from './scroll-top.service';

describe('ScrollTopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollTopService]
    });
  });

  it('should be created', inject([ScrollTopService], (service: ScrollTopService) => {
    expect(service).toBeTruthy();
  }));
});
