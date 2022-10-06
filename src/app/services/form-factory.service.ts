import { Injectable } from "@angular/core";
import { FormBuilder  } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class FormFactoryService {
  constructor(
    private fb: FormBuilder
  ){}

getInputform(){
  return this.fb.group({
    Limit: [''],
    Prix: ['']
  });
}

}
