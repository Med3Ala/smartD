import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from '../facture/facture.component';
import { FactureRoutingModule } from './facture-routing.module';



@NgModule({
  declarations: [FactureComponent],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
