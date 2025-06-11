import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrHeader } from './mr-header';

describe('MrHeader', () => {
  let component: MrHeader;
  let fixture: ComponentFixture<MrHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
