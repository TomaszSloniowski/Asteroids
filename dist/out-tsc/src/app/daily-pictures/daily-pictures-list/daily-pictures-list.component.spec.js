import { async, TestBed } from '@angular/core/testing';
import { DailyPicturesListComponent } from './daily-pictures-list.component';
describe('DailyPicturesListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DailyPicturesListComponent]
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
//# sourceMappingURL=daily-pictures-list.component.spec.js.map