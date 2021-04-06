import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { QuizfinalComponent } from './quizfinal/quizfinal.component';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizfinalComponent,
    QuestionComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
