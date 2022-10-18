import { Component, ViewEncapsulation, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTarifComponent } from './add-tarif/add-tarif.component';
import { map } from 'rxjs/operators';
import { DatatableData } from './data/datatables.data';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FactureComponent  implements OnInit {
  closeResult: string;
  public contentHeader: object;

  public Array = [];
 public rows = DatatableData;

  public columns = [
    { name: 'Name', prop: 'full_name' },
    { name: 'Email', prop: 'email' },
    { name: 'Age', prop: 'age' },
    { name: 'Salary', prop: 'salary' }
  ];



  // public columns = inputs ;



  constructor(private modalService: NgbModal) { }


  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
}





// Open modal with dark section
openModal(customContent) {
  this.modalService.open(customContent, { windowClass: 'dark-modal' });
}

openContent() {
  const modalRef = this.modalService.open(AddTarifComponent);
  modalRef.componentInstance.name = 'World';
}

  ngOnInit(): void {
     this.rows = JSON.parse((localStorage.getItem("Tarifs") as any )).TarifArray
      this.Array = this.rows
    //  return Array=[...this.rows]
    //  return  Array = this.rows = JSON.parse((localStorage.getItem("Tarifs") as any )).TarifArray

  }

  public multiPurposeRows = DatatableData;
  public ColumnMode = ColumnMode;

  private tempData = [];
  private multiPurposeTemp = [];

  // @param event
  // @param cell
  // @param rowIndex

  // inlineEditingUpdate(event, cell, rowIndex) {
  //   this.editing[rowIndex + '-' + cell] = false;
  //   this.rows[rowIndex][cell] = event.target.value;
  //   this.rows = [...this.rows];
  // }

  // @param code
  // filterUpdate(event) {
  //   const val = event.target.value.toLowerCase();

  //   const temp = this.tempData.filter(function (d) {
  //     return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });


    // this.rows = temp;
    // this.table.offset = 0;


}


