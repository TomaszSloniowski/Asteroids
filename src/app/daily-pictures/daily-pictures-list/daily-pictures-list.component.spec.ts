import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPicturesListComponent } from './daily-pictures-list.component';

describe('DailyPicturesListComponent', () => {
  let component: DailyPicturesListComponent;
  let fixture: ComponentFixture<DailyPicturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPicturesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPicturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
