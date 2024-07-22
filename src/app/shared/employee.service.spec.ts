import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { Desigination, Employee } from './employee.model';

describe('EmployeeService', () => {
    let service: EmployeeService;

    const mockData: Employee[] = [
        {
            name: 'mockName',
            email: 'mockEmail@gmail.com',
            companyName: 'ABC',
            contact: '123456789',
            designation: Desigination.SD,
            avatar: 'male',
        },
        {
            name: 'mockName1',
            email: 'mockEmail1@gmail.com',
            companyName: 'ABC',
            contact: '123456789',
            designation: Desigination.SD,
            avatar: 'male',
        },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmployeeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getEmployeeDetails()', () => {
        const spy = spyOn(localStorage, 'getItem').and.returnValue(
            '[{"name":"mockName","email":"mockEmail@gmail.com","companyName":"ABC","contact":"123456789","designation":"Software Developer","avatar":"male"}]'
        );

        expect(service.getEmployeeDetails()).toEqual([
            {
                name: 'mockName',
                email: 'mockEmail@gmail.com',
                companyName: 'ABC',
                contact: '123456789',
                designation: Desigination.SD,
                avatar: 'male',
            },
        ]);
    });

    it('getIndividualEmployee()', () => {
        const spy = spyOn(localStorage, 'getItem').and.returnValue(
            '[{"name":"mockName","email":"mockEmail@gmail.com","companyName":"ABC","contact":"123456789","designation":"Software Developer","avatar":"male"}, {"name":"mockName1","email":"mockEmail1@gmail.com","companyName":"ABC","contact":"123456789","designation":"Software Developer","avatar":"male"}]'
        );

        expect(service.getIndividualEmployee('mockEmail1@gmail.com')).toEqual({
            name: 'mockName1',
            email: 'mockEmail1@gmail.com',
            companyName: 'ABC',
            contact: '123456789',
            designation: Desigination.SD,
            avatar: 'male',
        });
    });

    describe('isEmployeeExist()', () => {
        it('should return true, if emp details exist', () => {
            const response = (service as any).isEmployeeExist(
                mockData,
                'mockEmail1@gmail.com'
            );
            expect(response).toEqual(true);
        });

        it('should return false, if emp details doex not exist', () => {
            const response = (service as any).isEmployeeExist(
                mockData,
                'mockEmail2@getMaxListeners.com'
            );
            expect(response).toEqual(false);
        });
    });

    describe('saveEmployeeDetails()', () => {
        it('should return error response, if ', () => {
            const deleteEmployeeSpy = spyOn(service, 'deleteEmployee');
            service.saveEmployeeDetails(mockData[0], true);

            expect(deleteEmployeeSpy).toHaveBeenCalledTimes(1);
        });

        it('should set emp details, if emp details does not exist', () => {
            spyOn(service, 'getEmployeeDetails').and.returnValue(null);
            const setItemSpy = spyOn(localStorage, 'setItem');

            const response = service.saveEmployeeDetails(mockData[0]);

            expect(setItemSpy).toHaveBeenCalledTimes(1);

            expect(response).toEqual({
                status: 'success',
                message: 'Employee deatils has been added successfully',
            });
        });

        it('should set emp details, if emp details does not exist', () => {
            const getEmployeeDetailsSpy = spyOn(
                service,
                'getEmployeeDetails'
            ).and.returnValue(mockData);
            const newEmpData = {
                name: 'mockName2',
                email: 'mockEmail2@gmail.com',
                companyName: 'ABC',
                contact: '123456789',
                designation: Desigination.SD,
                avatar: 'male',
            };
            const setItemSpy = spyOn(localStorage, 'setItem');

            const response = service.saveEmployeeDetails(newEmpData);

            expect(setItemSpy).toHaveBeenCalledTimes(1);
            expect(response).toEqual({
                status: 'success',
                message: 'Employee deatils has been added successfully',
            });
        });

        it('should not set emp details, if emp details already exist', () => {
            spyOn(service, 'getEmployeeDetails').and.returnValue(mockData);
            const newEmpData = {
                name: 'mockName1',
                email: 'mockEmail1@gmail.com',
                companyName: 'ABC',
                contact: '123456789',
                designation: Desigination.SD,
                avatar: 'male',
            };
            const setItemSpy = spyOn(localStorage, 'setItem');

            const response = service.saveEmployeeDetails(newEmpData);

            expect(setItemSpy).not.toHaveBeenCalled();
            expect(response).toEqual({
                status: 'error',
                message: 'Duplicate employee not possible',
            });
        });
    });
});
