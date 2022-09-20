import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputs : any [] = [{
    Limit: '',
    Prix: ''

  }] ;

  addfield(){
    this.inputs.push({
      Limit: '',
      Prix: ''
    });

  }

  removeInput(tId){
    const index = this.inputs.findIndex((tarif) => tarif.id === tId);
    this.inputs.splice(index, 1);
  }

}
