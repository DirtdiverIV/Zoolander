import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessformComponent } from './accessform.component';

describe('AccessformComponent', () => {
  let component: AccessformComponent;
  let fixture: ComponentFixture<AccessformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessformComponent]
    });
    fixture = TestBed.createComponent(AccessformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
