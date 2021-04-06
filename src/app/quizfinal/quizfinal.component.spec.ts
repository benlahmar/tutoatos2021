import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizfinalComponent } from './quizfinal.component';

describe('QuizfinalComponent', () => {
  let component: QuizfinalComponent;
  let fixture: ComponentFixture<QuizfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizfinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
