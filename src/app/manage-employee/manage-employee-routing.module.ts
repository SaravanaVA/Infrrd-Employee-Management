import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
    {
        path: 'edit/:email',
        component: CreateEmployeeComponent,
    },
    {
        path: 'create',
        component: CreateEmployeeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManageEmployeeRoutingModule {}
