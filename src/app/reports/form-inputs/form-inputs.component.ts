import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.scss']
})
export class FormInputsComponent implements OnInit {

  popupModel;


  model = {
    day: true,
    month : false,
    year : false
  };

  public checkboxGroupForm: FormGroup;
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkboxGroupForm = this.formBuilder.group({
      day: true,
      month : false,
      year : false
    });
    this.radioGroupForm = this.formBuilder.group({
      'modelRadioForm': 'day'
    })
  }

}
