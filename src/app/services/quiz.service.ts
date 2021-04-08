import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../model/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }



getquiz()
{
  return this.http.get<Quiz>("https://raw.githubusercontent.com/benlahmar/tutoatos2021/branch2/src/assets/aspnet.json");
}
}