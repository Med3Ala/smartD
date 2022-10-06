import { Component, OnInit , Input } from '@angular/core';
import { FormGroup, FormControl, FormArray , FormBuilder  } from '@angular/forms';
import { FormFactoryService  } from '../../services/form-factory.service';

@Component({
  selector: 'app-add-tarif',
  templateUrl: './add-tarif.component.html',
  styleUrls: ['./add-tarif.component.scss']
})
export class AddTarifComponent implements OnInit {
  form1: FormGroup;

//  tarifsCount =[0];

  constructor(
    private fb: FormBuilder,
    private FormFactoryService : FormFactoryService
  ) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      Tarifname : [''],
      TarifArray: new FormArray([]),
    })
  }

  get TarifArray(){
    return(<FormArray>this.form1.get('TarifArray'));
  }



  addfield(){
    this.TarifArray.push(this.FormFactoryService.getInputform());
  }

  removeInput(i: number){
    this.TarifArray.removeAt(i)
  }

  onSubmit() {
    console.log('form submitted');
    console.log(this.form1.value);

  }





  // tarifInputsArray = new FormArray([
  //   new FormControl('', .required)

  // ])


  // inputs : any [] = [{
  //   Limit: 0,
  //   Prix: 0

  // }] ;

  // addfield(){
  //   this.tarifInputs.push({
  //     Limit: 0,
  //     Prix: 0
  //   });

  // }

  // addfield(){
  //   this.tarifInputsArray.push(new FormControl(''));
  // }

  // addfield(){
  //   console.warn(this.tarifInputs.value);
  //   this.tarifsCount.push(0)
  //   this.tarifInputs.addControl("Limit"+this.tarifsCount.length,
  //   new FormControl(0))
  //   this.tarifInputs.addControl("Prix"+this.tarifsCount.length,
  //   new FormControl(0))

  // }

//   removeInput(tId){
//     const index = this.tarifInputs.findIndex((tarif) => tarif.id === tId);
//     this.tarifInputs.splice(index, 1);
//   }

  // saveTarifs(){
  //   localStorage.setItem("Tarifs",JSON.stringify(this.TarifArray) )
  // }

}


