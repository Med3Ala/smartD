import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from '../facture/facture.component';
import { FactureRoutingModule } from './facture-routing.module';
import { AddTarifComponent } from './add-tarif/add-tarif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component'



@NgModule({
  declarations: [FactureComponent, AddTarifComponent,InputComponent],
  imports: [
    CommonModule,
    FactureRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
  // entryComponents:[
  //   AddTarifComponent
  // ]
})
export class FactureModule { }
