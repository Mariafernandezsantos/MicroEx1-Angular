import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsInputComponentComponent } from './characteristics-input-component.component';

describe('CharacteristicsInputComponentComponent', () => {
  let component: CharacteristicsInputComponentComponent;
  let fixture: ComponentFixture<CharacteristicsInputComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteristicsInputComponentComponent]
    });
    fixture = TestBed.createComponent(CharacteristicsInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
