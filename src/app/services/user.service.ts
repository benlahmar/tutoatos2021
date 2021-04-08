import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  getusers()
  {
     let res= this.http.get<User[]>("https://jsonplaceholder.typicode.com/users", {observe: "response"});
     
     return res;
  }
  getuser(id:number)
  {
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/"+id);

  }

  

  deleteuser(id:number)
  {
      this.http.delete("https://jsonplaceholder.typicode.com/users/"+id);
  }
  adduser(data:any)
  {
    this.http.post("https://jsonplaceholder.typicode.com/users", data);
  }

  getposts()
  {
     let res= this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {observe: "body"});
     
     return res;
  }
}
