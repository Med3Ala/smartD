import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { GraphBlocComponent } from './graph-bloc/graph-bloc.component';




@NgModule({
  declarations: [ReportsComponent, GraphBlocComponent,

  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartsModule,
    ChartistModule
  ]
})
export class ReportsModule { }
