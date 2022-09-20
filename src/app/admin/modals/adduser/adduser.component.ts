import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'app/admin/admin.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {


    userAddForm : FormGroup = new FormGroup({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required])
    });

  constructor(public activeModal: NgbActiveModal,
    private adminService : AdminService) { }

  ngOnInit(): void {

  }

  addUser(){
    this.adminService.addUser({
        login: this.userAddForm.value.login,
        password: this.userAddForm.value.password,
        name: this.userAddForm.value.name
    }).subscribe(res => {
      console.log(res);
    })
  }

}
