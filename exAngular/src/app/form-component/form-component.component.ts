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
  peopleList: any[] = [];

  @Output() characteristicsAdded = new EventEmitter<string[]>();

 addPerson() {
  this.peopleList.push({
    id: this.formData.id,
    name: this.formData.name,
    lastName: this.formData.lastName,
    position: this.formData.position,
    salary: this.formData.salary,
    characteristics: this.formData.characteristics.slice()
  });
  this.characteristicsAdded.emit(this.formData.characteristics);
  this.formData = {
    id: '',
    name: '',
    lastName: '',
    position: '',
    salary: '',
    characteristics: []
  };
}
}
