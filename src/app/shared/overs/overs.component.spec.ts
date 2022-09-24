import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversComponent } from './overs.component';

describe('OversComponent', () => {
  let component: OversComponent;
  let fixture: ComponentFixture<OversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
