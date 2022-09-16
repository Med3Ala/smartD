import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatatableData } from 'app/data-tables/data/datatables.data';

import {
    ColumnMode,
    DatatableComponent,
    SelectionType
  } from '@swimlane/ngx-datatable';
import { AdduserComponent } from './modals/adduser/adduser.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '/assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
    
  public rows = DatatableData;
  public ColumnMode = ColumnMode;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  
    // Open content with dark section
    openContent() {
        const modalRef = this.modalService.open(AdduserComponent);
        modalRef.componentInstance.name = 'World';
    }

}
