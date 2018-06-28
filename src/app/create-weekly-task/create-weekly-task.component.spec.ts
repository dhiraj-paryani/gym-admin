import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeeklyTaskComponent } from './create-weekly-task.component';

describe('CreateWeeklyTaskComponent', () => {
  let component: CreateWeeklyTaskComponent;
  let fixture: ComponentFixture<CreateWeeklyTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWeeklyTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWeeklyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
