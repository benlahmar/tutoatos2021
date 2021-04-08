import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { MapOperator } from 'rxjs/internal/operators/map';
import { filter, map, mapTo, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
abcd:string;
    ut:User;
  data:User[] | null;
  status:any;
  constructor(private service:UserService) {
   }

   add()
   {
     console.log(this.ut);
   }
  ngOnInit(): void {
    let res=this.service.getusers();
    this.ut=new User();

  
    let aa=res.pipe(map(x=>x.body),tap(x=>x?.filter(x=>x.phone.startsWith("1"))));
    
    aa.subscribe(x=> console.log("***********"+x));

    res.subscribe(x=>{
      this.data=x.body;
      console.log(this.data) ;
     
      this.status=x.status;    
    }, err=>console.log(err));
  }

  getpost(iduser:number)
  {
    let rr=this.service.getposts();
    let uu=this.service.getuser(iduser);
    let cc=combineLatest([rr,uu])
    .pipe(map(([tt,u])=>tt.filter(f=>f.userId==u.id)));

    cc.subscribe(p=>console.log(p));
  }
  abc()
  {
    
    let j=0;
    const promise = new Promise(resolve => {
      setInterval(() => {
        j++;
        resolve(" Promise  "+j);
      }, 2000);
    });
    
    promise.then(value => console.log(value));//affficher promise 1
let i=0;
    const observable = new Observable<string>(observer => {
      setInterval(() => {
        i++;
        observer.next('Observable!'+i+"   j:"+j);
      }, 2000);
    });
    let xx=observable.pipe(map((x:string)=>x.slice(j)));
    xx.subscribe(value => console.log(value));//afficher obs 1, obser 2, 

  }

  post(id:number)
  {
   let pp= this.service.getposts();
    let uu=this.service.getuser(id);
    let res=combineLatest([pp,uu]).pipe(map(([o,us])=>o.filter(a=>a.userId==us.id) ));
    res.subscribe(x=>console.log(x));
  }
}
