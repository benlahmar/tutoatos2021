import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../model/Question';
import { Quiz } from '../model/Quiz';

@Pipe({
  name: 'quizcorrect'
})
export class QuizcorrectPipe implements PipeTransform {

  transform(value: Quiz, ...args: boolean[]): Question[] {
    let qs=value.questions.filter(q => q.isCorrect==args[0]);
    return qs;
  }

}
