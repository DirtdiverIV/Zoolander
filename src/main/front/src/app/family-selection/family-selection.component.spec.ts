import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySelectionComponent } from './family-selection.component';

describe('FamilySelectionComponent', () => {
  let component: FamilySelectionComponent;
  let fixture: ComponentFixture<FamilySelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilySelectionComponent]
    });
    fixture = TestBed.createComponent(FamilySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
