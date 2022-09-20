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
import { Device } from 'app/models/device';
import { AddDeviceComponent } from './modals/add-device/add-device.component';

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
  devices : Device[];

  constructor(private modalService: NgbModal,
    private adminService : AdminService) { }

  ngOnInit(): void {
    //get All users
    this.getUsers();
    this.getDevices();
  }

  
    // Open content with dark section
    addUser() {
        const modalRef = this.modalService.open(AdduserComponent);
        modalRef.componentInstance.name = 'AdduserComponent';
    }

    addDevice(){
        const modalRef = this.modalService.open(AddDeviceComponent);
        modalRef.componentInstance.name = 'AddDeviceComponent';
    }

    getUsers(){
        this.adminService.getUsers().subscribe((res:any) => {
            this.users = res.result
        })
    }
    
    getDevices(){
        this.adminService.getDevices().subscribe((res:any) => {
            this.devices = res.data
        })
    }

}