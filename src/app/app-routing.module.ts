import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'employee',
        loadChildren: () =>
            import('./manage-employee/manage-employee.module').then(
                (m) => m.ManageEmployeeModule
            ),
    },

    {
        path: 'overview',
        loadChildren: () =>
            import('./overview/overview.module').then((m) => m.OverviewModule),
    },
    {
        path: '**',
        redirectTo: 'overview',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
