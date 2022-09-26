import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListCardComponent } from './match-list-card.component';

describe('MatchListCardComponent', () => {
  let component: MatchListCardComponent;
  let fixture: ComponentFixture<MatchListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
