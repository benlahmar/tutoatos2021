import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from '../model/Quiz';

@Pipe({
  name: 'getklk'
})
export class GetklkPipe implements PipeTransform {

  transform(value: string, ...args: Quiz[]): String[] {
    let x:string[]=[];
    args[0].questions.filter(q=> q.name.startsWith(value))
    .forEach(q=> x.push(q.name));
    
    return x;
  }

}
