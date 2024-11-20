import { TestBed } from '@angular/core/testing';

import { MyLibModService } from './my-lib-mod.service';

describe('MyLibModService', () => {
  let service: MyLibModService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibModService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
