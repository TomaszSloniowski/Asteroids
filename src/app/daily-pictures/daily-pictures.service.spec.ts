import { TestBed } from '@angular/core/testing';

import { DailyPicturesService } from './daily-pictures.service';

describe('DailyPicturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyPicturesService = TestBed.get(DailyPicturesService);
    expect(service).toBeTruthy();
  });
});
