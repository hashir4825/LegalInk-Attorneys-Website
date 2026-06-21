import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreaDetail } from './practice-area-detail';

describe('PracticeAreaDetail', () => {
  let component: PracticeAreaDetail;
  let fixture: ComponentFixture<PracticeAreaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeAreaDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeAreaDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
