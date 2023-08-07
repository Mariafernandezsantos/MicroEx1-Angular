import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent {
  formData: any = {
    id: '',
    name: '',
    lastName: '',
    position: '',
    salary: '',
    characteristics: [],
  };

  @Output() personAdded = new EventEmitter<any>();

  addPerson() {
    this.personAdded.emit(this.formData);
    this.formData = {
      id: '',
      name: '',
      lastName: '',
      position: '',
      salary: '',
      characteristics: [],
    };
  }
}
