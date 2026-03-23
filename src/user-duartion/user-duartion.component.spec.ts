import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDuartionComponent } from './user-duartion.component';

describe('UserDuartionComponent', () => {
  let component: UserDuartionComponent;
  let fixture: ComponentFixture<UserDuartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDuartionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDuartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
