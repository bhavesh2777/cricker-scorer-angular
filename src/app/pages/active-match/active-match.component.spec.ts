import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMatchComponent } from './active-match.component';

describe('ActiveMatchComponent', () => {
  let component: ActiveMatchComponent;
  let fixture: ComponentFixture<ActiveMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
