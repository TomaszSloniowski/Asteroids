import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsDetailsComponent } from './asteroids-details.component';

describe('AsteroidsDetailsComponent', () => {
  let component: AsteroidsDetailsComponent;
  let fixture: ComponentFixture<AsteroidsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
