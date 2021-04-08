import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private http:HttpClient) { }


 data:string="exemple de service";
  somme(a:number, b:number):number
  {
    return a+b;
  }

  abc(x:string)
  {
    this.data=x;
  }
  goTo(x:number, page:number)
  {
    let y=x+page;
    return y;
  }
  get datax():string
  {
    return this.data;
  }

  getusers()
  {
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
