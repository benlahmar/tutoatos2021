import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizfinalComponent } from './quizfinal/quizfinal.component';

const routes: Routes = [
  {path:'quiz', component:QuizComponent},
  {path:'quizf', component:QuizfinalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
