import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrNgComponents } from './mr-ng-components';

describe('MrNgComponents', () => {
  let component: MrNgComponents;
  let fixture: ComponentFixture<MrNgComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrNgComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrNgComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
