import { TestBed } from '@angular/core/testing';

import { MaterialIconsService } from './material-icons.service';

describe('MaterialIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialIconsService = TestBed.get(MaterialIconsService);
    expect(service).toBeTruthy();
  });
});
