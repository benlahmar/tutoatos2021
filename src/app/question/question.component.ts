import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../model/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question:Question;
  @Input()
  modeq?:string;

  @Output()
  handler=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  recpt(xx:any)
  {
    let nb=this.question.options.filter(o=> o.isselected).length;
    if(nb==0)
   this.question.isSelected=false;
    else
     this.question.isSelected=true;

     //appel a la fonction du parant???
     this.handler.emit("move");
  }

  iscorrect()
  {
   
    this.question.isCorrect= this.question.options
    .every(o=> o.isAnswer ==o.isselected);

    return this.question.isCorrect;
  }
}
