import { async, TestBed } from '@angular/core/testing';
import { DailyPictureDetailsComponent } from './daily-picture-details.component';
describe('DailyPictureDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DailyPictureDetailsComponent]
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
//# sourceMappingURL=daily-picture-details.component.spec.js.map