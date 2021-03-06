import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryProfileComponent } from './ministry-profile.component';

describe('MinistryProfileComponent', () => {
  let component: MinistryProfileComponent;
  let fixture: ComponentFixture<MinistryProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
