import { TestBed, async, inject } from '@angular/core/testing';

import { RegisteredUserOnlyGuard } from './registered-user-only.guard';

describe('RegisteredUserOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisteredUserOnlyGuard]
    });
  });

  it('should ...', inject([RegisteredUserOnlyGuard], (guard: RegisteredUserOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
