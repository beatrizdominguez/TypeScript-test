import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfluencerComponent } from './detail-influencer.component';

describe('DetailInfluencerComponent', () => {
  let component: DetailInfluencerComponent;
  let fixture: ComponentFixture<DetailInfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
