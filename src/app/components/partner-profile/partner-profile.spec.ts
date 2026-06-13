import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerProfile } from './partner-profile';

describe('PartnerProfile', () => {
  let component: PartnerProfile;
  let fixture: ComponentFixture<PartnerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
