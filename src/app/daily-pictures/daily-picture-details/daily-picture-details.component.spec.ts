import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPictureDetailsComponent } from './daily-picture-details.component';

describe('DailyPictureDetailsComponent', () => {
  let component: DailyPictureDetailsComponent;
  let fixture: ComponentFixture<DailyPictureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPictureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPictureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
