import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreateModalComponent } from './person-create-modal.component';

describe('PersonCreateModalComponent', () => {
  let component: PersonCreateModalComponent;
  let fixture: ComponentFixture<PersonCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
