import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
abcd:string;
  data:any;
  users:any;
  status:any;
  constructor(private service:UserService) {

     
   }

  ngOnInit(): void {
    let res=this.service.getusers();
    
    res.subscribe(x=>{
      this.data=x.body;
      
      this.status=x.status;
      this.users=this.data;
    console.log(this.data);
    console.log(this.users);
    
    }, err=>console.log(err));
  }

  abc()
  {
    this.abcd="koko";
  }
}
