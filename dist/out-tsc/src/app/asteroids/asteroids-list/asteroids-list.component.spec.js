import { async, TestBed } from '@angular/core/testing';
import { AsteroidsListComponent } from './asteroids-list.component';
describe('AsteroidsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AsteroidsListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AsteroidsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=asteroids-list.component.spec.js.map