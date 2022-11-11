import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { GraphBlocComponent } from './graph-bloc/graph-bloc.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReportsComponent, GraphBlocComponent, FormInputsComponent,

  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartsModule,
    ChartistModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReportsModule { }
