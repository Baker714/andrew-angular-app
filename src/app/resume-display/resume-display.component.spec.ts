import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResumeDisplayComponent } from './resume-display.component';

describe('ResumeDisplayComponent', () => {
  let component: ResumeDisplayComponent;
  let fixture: ComponentFixture<ResumeDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
