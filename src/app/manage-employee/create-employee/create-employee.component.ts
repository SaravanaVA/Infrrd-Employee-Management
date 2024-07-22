import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../shared/employee.service';
import {
    Desigination,
    Employee,
    Response,
} from 'src/app/shared/employee.model';

@Component({
    selector: 'create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private empService: EmployeeService
    ) {}

    public employeeForm: FormGroup;

    // flag used to display the desigination in the UI
    public designations: Desigination[] = [
        Desigination.SD,
        Desigination.SSD,
        Desigination.QA,
        Desigination.TL,
        Desigination.TM,
    ];

    public response: Response;

    // flags identifies, wheather it is create flow or edit flow
    public isEditMode = false;

    // default page and page title would be create workflow
    public title = 'Create Employee';

    public ngOnInit(): void {
        this.employeeForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            companyName: ['', Validators.required],
            contact: ['', Validators.required],
            designation: [this.designations[0], Validators.required],
            avatar: ['', Validators.required],
        });

        // getting route params from url
        const email = this.route.snapshot.paramMap.get('email');

        // if we have route params, considering it as update/edit workflow
        if (email) {
            this.isEditMode = true;
            this.title = 'Edit Employee';

            // disabling email field, because we are using this as unique field
            this.employeeForm.get('email').disable();

            const editEmpDetails = this.empService.getIndividualEmployee(email);

            // setting up form value, with edit workflow data
            this.employeeForm.setValue(editEmpDetails);
        }

        this.response = {};
    }

    public onSubmit() {
        if (this.employeeForm.valid) {
            // saving the actual info given by user
            this.response = this.empService.saveEmployeeDetails(
                this.employeeForm.getRawValue(),
                this.isEditMode
            );

            if (this.response.status == 'success') {
                // for success response, restting the form for allowing
                // user to enter another employee details, without refresh
                this.employeeForm.reset();
            }
        }
    }
}
