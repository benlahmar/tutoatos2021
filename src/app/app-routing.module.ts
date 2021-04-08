import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizfinalComponent } from './quizfinal/quizfinal.component';
import { ThemeComponent } from './theme/theme.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'quiz', component:QuizComponent},
  {path:'quizf/:fff', component:QuizfinalComponent},
{path:'theme', component:ThemeComponent},

{path:'', redirectTo:'/theme', pathMatch:'full'},
{path:'abc',loadChildren:'./modules/about/about.module#AboutModule'},
{path:'admin', loadChildren: () =>import('./modules/admin/admin.module')
  .then(md=> md.AdminModule)
},
{path:'users', component:UserComponent},
{path:'posts/:id', component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
