import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { adminRoutingModule } from './admin-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { AdduserComponent } from './modals/adduser/adduser.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent, AdduserComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    adminRoutingModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
