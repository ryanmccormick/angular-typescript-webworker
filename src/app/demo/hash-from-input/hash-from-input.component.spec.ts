import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashFromInputComponent } from './hash-from-input.component';

describe('HashFromInputComponent', () => {
  let component: HashFromInputComponent;
  let fixture: ComponentFixture<HashFromInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashFromInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashFromInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
