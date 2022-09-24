import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListCardComponent } from './team-list-card.component';

describe('TeamListCardComponent', () => {
  let component: TeamListCardComponent;
  let fixture: ComponentFixture<TeamListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
