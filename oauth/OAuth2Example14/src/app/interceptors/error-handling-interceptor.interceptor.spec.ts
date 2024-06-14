import { TestBed } from '@angular/core/testing';

import { ErrorHandlingInterceptorInterceptor } from './error-handling-interceptor.interceptor';

describe('ErrorHandlingInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHandlingInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHandlingInterceptorInterceptor = TestBed.inject(ErrorHandlingInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
