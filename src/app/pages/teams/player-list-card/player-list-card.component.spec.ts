import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListCardComponent } from './player-list-card.component';

describe('PlayerListCardComponent', () => {
  let component: PlayerListCardComponent;
  let fixture: ComponentFixture<PlayerListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
