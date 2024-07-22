import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
    selector: 'overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
    constructor(private router: Router, private empService: EmployeeService) {}

    public employeeList: Employee[];

    public search: string;

    ngOnInit(): void {
        // getting all the emp details on load
        this.employeeList = this.empService.getEmployeeDetails();
    }

    /*
     * Method to handle the edit workflow navigation
     *
     * */
    public editEmp(email) {
        this.router.navigate(['/employee/edit', email]);
    }

    public onSearch(event) {
        //  we may implement debounce logic here, if we have more dataset
        // instead of checking each keypress
        const fullList = this.empService.getEmployeeDetails();

        this.employeeList = fullList.filter((val) =>
            val.email.includes(this.search)
        );
    }

    public deleteEmp(email: string) {
        if (confirm('Are you sure to delete employee  "' + email + '"')) {
            this.empService.deleteEmployee(email);
            this.employeeList = this.empService.getEmployeeDetails();
        }
    }
}
