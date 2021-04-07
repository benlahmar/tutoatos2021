import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { QuizfinalComponent } from './quizfinal/quizfinal.component';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';
import { ConfigComponent } from './config/config.component';
import { ThemeComponent } from './theme/theme.component';
import { AboutModule } from './modules/about/about.module';
import { AdminModule } from './modules/admin/admin.module';
import { ColDirective } from './directives/col.directive';
import { BtnDirective } from './directives/btn.directive';
import { TabDirective } from './directives/tab.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatButtonModule  } from '@angular/material/button';
import {  MatIconModule  } from '@angular/material/icon';

import {  MatBadgeModule  } from '@angular/material/badge';

import {  MatProgressBarModule  } from '@angular/material/progress-bar';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizfinalComponent,
    QuestionComponent,
    OptionComponent,
    ConfigComponent,
    ThemeComponent,
    ColDirective,
    BtnDirective,
    TabDirective,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AboutModule,
    AdminModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
