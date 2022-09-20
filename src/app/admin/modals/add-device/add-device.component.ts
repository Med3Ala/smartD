import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'app/admin/admin.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

    addDeviceForm : FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        communication_type: new FormControl('', [Validators.required]),
        hasMaster: new FormControl('', [Validators.required]),
        slaveNbr: new FormControl('', [Validators.required])
    });

  constructor(public activeModal: NgbActiveModal,
    private adminService : AdminService) { }

  ngOnInit(): void {

  }

  addDevice(){
    this.adminService.addDevice({
        name: this.addDeviceForm.value.name,
        type: this.addDeviceForm.value.type,
        communication_type: this.addDeviceForm.value.communication_type,
        hasMaster: this.addDeviceForm.value.hasMaster,
        slaveNbr: this.addDeviceForm.value.slaveNbr
    }).subscribe(res => {
      console.log(res);
    })
  }

}
