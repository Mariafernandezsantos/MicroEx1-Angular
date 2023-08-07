import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characteristics-component',
  templateUrl: './characteristics-component.component.html',
  styleUrls: ['./characteristics-component.component.scss'],
})
export class CharacteristicsComponentComponent {
  @Input() characteristics: string[] = [];
}
