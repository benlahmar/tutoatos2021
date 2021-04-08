import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../model/post';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  posts:Post[];
  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  constructor(private service:UserService, private route:ActivatedRoute) { }
param:number;
  ngOnInit(): void {
    this.route.params.subscribe(p=> {this.param=p.id;console.log(this.param)});
    this.getpost();
  }

  getpost()
  {
    let rr=this.service.getposts();
    let uu=this.service.getuser(this.param);
    let cc=combineLatest([rr,uu]).pipe(map(([tt,u])=>tt.filter(f=>f.userId==u.id)));
    console.log("********"+this.param);
    cc.subscribe(p=>{this.posts=p; console.log(p)});
  }
}
