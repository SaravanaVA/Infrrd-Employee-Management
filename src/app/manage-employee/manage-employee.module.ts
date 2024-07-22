import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ManageEmployeeRoutingModule } from './manage-employee-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
    declarations: [CreateEmployeeComponent],
    imports: [CommonModule, ReactiveFormsModule, ManageEmployeeRoutingModule],
})
export class ManageEmployeeModule {}
