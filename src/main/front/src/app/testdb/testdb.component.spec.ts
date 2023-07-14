import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDBComponent } from './testdb.component';

describe('TestdbComponent', () => {
  let component: TestDBComponent;
  let fixture: ComponentFixture<TestDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDBComponent]
    });
    fixture = TestBed.createComponent(TestDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
