import { TestBed } from '@angular/core/testing';

import { TabslibService } from './tabslib.service';

describe('TabslibService', () => {
  let service: TabslibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabslibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
