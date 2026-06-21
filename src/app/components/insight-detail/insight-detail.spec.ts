import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightDetail } from './insight-detail';

describe('InsightDetail', () => {
  let component: InsightDetail;
  let fixture: ComponentFixture<InsightDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
