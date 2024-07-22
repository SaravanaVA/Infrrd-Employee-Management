import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';

@NgModule({
    declarations: [OverviewComponent],
    imports: [CommonModule, FormsModule, OverviewRoutingModule],
})
export class OverviewModule {}
