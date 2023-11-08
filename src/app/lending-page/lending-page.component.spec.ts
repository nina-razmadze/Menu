import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingPageComponent } from './lending-page.component';

describe('LendingPageComponent', () => {
  let component: LendingPageComponent;
  let fixture: ComponentFixture<LendingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LendingPageComponent]
    });
    fixture = TestBed.createComponent(LendingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
