import { TestBed } from '@angular/core/testing';

import { SvgItemService } from './svg-item.service';

describe('SvgItemService', () => {
  let service: SvgItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
