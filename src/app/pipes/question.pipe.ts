import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../model/Question';
import { Quiz } from '../model/Quiz';

@Pipe({
  name: 'question'
})
export class QuestionPipe implements PipeTransform {

  transform(value: Quiz, ...args: boolean[]): string[] {
    let tt:string[]=[];
    let qs=value.questions.filter(q=> q.isSelected==args[0]);
    qs.forEach(q=>tt.push(q.name))
    return tt ;
  }

}
