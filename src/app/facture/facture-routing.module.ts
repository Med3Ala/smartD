import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactureComponent } from './facture.component';

const routes : Routes = [
  {
    path: '',
    component: FactureComponent,
    data: {
        title: 'Facture'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FactureRoutingModule { }

export const routedComponents = [FactureComponent];
