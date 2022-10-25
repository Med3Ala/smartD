import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';




@NgModule({
  declarations: [ReportsComponent,

  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartsModule,
    ChartistModule
  ]
})
export class ReportsModule { }
