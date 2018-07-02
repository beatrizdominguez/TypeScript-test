import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfluencerComponent } from './list-influencer.component';

describe('ListInfluencerComponent', () => {
  let component: ListInfluencerComponent;
  let fixture: ComponentFixture<ListInfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
