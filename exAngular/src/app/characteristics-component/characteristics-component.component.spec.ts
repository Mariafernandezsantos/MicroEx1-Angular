import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsComponentComponent } from './characteristics-component.component';

describe('CharacteristicsComponentComponent', () => {
  let component: CharacteristicsComponentComponent;
  let fixture: ComponentFixture<CharacteristicsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteristicsComponentComponent]
    });
    fixture = TestBed.createComponent(CharacteristicsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
