import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerResponseComponent } from './worker-response.component';

describe('WorkerResponseComponent', () => {
  let component: WorkerResponseComponent;
  let fixture: ComponentFixture<WorkerResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
