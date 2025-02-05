import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';

describe('CreateEmployeeComponent', () => {
    let component: CreateEmployeeComponent;
    let fixture: ComponentFixture<CreateEmployeeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateEmployeeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

// Not added any new test case here. For UT, please check employee.service.spec.ts
