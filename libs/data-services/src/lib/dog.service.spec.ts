import { TestBed, inject } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DogService } from './dog.service';

describe('DogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule],
      providers: [DogService]
    });
  });

  it('should be created', inject([DogService], (service: DogService) => {
    expect(service).toBeTruthy();
  }));
});
