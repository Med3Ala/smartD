import { Component, ViewEncapsulation, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTarifComponent } from './add-tarif/add-tarif.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FactureComponent  implements OnInit {
  closeResult: string;
  public contentHeader: object;

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

  }
}


