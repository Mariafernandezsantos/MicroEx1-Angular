import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-characteristics-input-component',
  templateUrl: './characteristics-input-component.component.html',
  styleUrls: ['./characteristics-input-component.component.scss'],
})
export class CharacteristicsInputComponentComponent {
  characteristic: string = '';
  characteristicsList: string[] = [];

  @Output() characteristicsAdded = new EventEmitter<string[]>();

  addCharacteristic() {
    if (this.characteristic.trim() !== '') {
      this.characteristicsList.push(this.characteristic);
      this.characteristicsAdded.emit(this.characteristicsList);
      this.characteristic = '';
    }
  }
}
