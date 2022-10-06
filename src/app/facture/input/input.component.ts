import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFactoryService  } from '../../services/form-factory.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})


export class InputComponent implements OnInit {
  @Input() inputFormGroup: FormGroup = this.fb.group({});

  @Input() index: number;



  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) {}

  ngOnInit() {
    // this.inputFormGroup.get('setNumber').setValue(this.index);
  }
}
