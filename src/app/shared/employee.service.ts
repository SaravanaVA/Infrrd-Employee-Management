import { Injectable } from '@angular/core';

import { Employee, Response } from './employee.model';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    /**
     * Function to save the employee details. Same method would be used
     * for both save and update.
     *
     * For Update the existing details, need to pass flag modify to be true
     *
     * If we try to add existing employee, it return error response with detailed error message
     *
     * For successful operation, it will return success response
     *
     * @param {Employee} empInfo will be the required emp details in format of Employee
     * @param {boolean} [modify=false] Opetional field to decide, it create worlfow or edit/update workflow
     * @returns {Response}
     *
     * @memberOf EmployeeService
     */
    public saveEmployeeDetails(empInfo: Employee, modify = false): Response {
        if (modify) {
            // for update workflow, deleting the existing emp details, to handle info
            // in localstorage
            this.deleteEmployee(empInfo.email);
        }

        const existingDetails = this.getEmployeeDetails();

        // as of now error handled duplicate creation alone
        if (
            !existingDetails ||
            !this.isEmployeeExist(existingDetails, empInfo.email)
        ) {
            let empArray = existingDetails == null ? [] : existingDetails;
            empArray.push(empInfo);

            // setting up emp detail in localstorage
            JSON.stringify(
                localStorage.setItem(
                    'infrrd-emp-details',
                    JSON.stringify(empArray)
                )
            );
            return {
                status: 'success',
                message: 'Employee deatils has been added successfully',
            };
        } else {
            return {
                status: 'error',
                message: 'Duplicate employee not possible',
            };
        }
    }

    /**
     * Retruns all the existing employee details
     *
     * @returns {Employee[]}
     *
     * @memberOf EmployeeService
     */
    public getEmployeeDetails(): Employee[] {
        const empDetails = JSON.parse(
            localStorage.getItem('infrrd-emp-details')
        );
        return empDetails ? empDetails : [];
    }

    /**
     * Returns indvidual employee information. It will query based
     * on email.
     *
     * Need to pass valid email.
     *
     * @param {string} email
     * @returns {Employee}
     *
     * @memberOf EmployeeService
     */

    getIndividualEmployee(email: string): Employee {
        let existingDetails = this.getEmployeeDetails();

        return existingDetails.find((val) => val.email == email);
    }

    /**
     *  Deletes indvidual employee information. It will query based
     * on email.
     *
     *
     * @param {string} email
     * @returns {Response}
     *
     * @memberOf EmployeeService
     */
    public deleteEmployee(email: string): Response {
        let existingDetails = this.getEmployeeDetails();

        let empArray = existingDetails.filter((val) => val.email != email);
        JSON.stringify(
            localStorage.setItem('infrrd-emp-details', JSON.stringify(empArray))
        );
        return {
            status: 'success',
            message: 'Employee details has been deleted successfully',
        };
    }

    /*
     * Helper method to check, if employee details already exist or not
     *
     * @private
     * @param {Employee[]} existingDeails
     * @param {string} currentEmpEmail
     * @returns {boolean}
     *
     * @memberOf EmployeeService
     * */
    private isEmployeeExist(
        existingDeails: Employee[],
        currentEmpEmail: string
    ): boolean {
        return existingDeails.some((val) => val.email == currentEmpEmail);
    }
}
