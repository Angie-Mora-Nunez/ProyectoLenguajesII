import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignuComponent;
  let fixture: ComponentFixture<SignuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
