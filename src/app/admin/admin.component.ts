import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatatableData } from 'app/data-tables/data/datatables.data';

import {
    ColumnMode,
    DatatableComponent,
    SelectionType
  } from '@swimlane/ngx-datatable';
import { AdduserComponent } from './modals/adduser/adduser.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './admin.service';
import { User } from 'app/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss', '/assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
    
  public rows = DatatableData;
  public ColumnMode = ColumnMode;
  users : User[];

  constructor(private modalService: NgbModal,
    private adminService : AdminService) { }

  ngOnInit(): void {
    //get All users
    this.getUsers();
  }

  
    // Open content with dark section
    openContent() {
        const modalRef = this.modalService.open(AdduserComponent);
        modalRef.componentInstance.name = 'World';
    }

    getUsers(){
        this.adminService.getUsers().subscribe((res:any) => {
            this.users = res.result
        })
    }

}
