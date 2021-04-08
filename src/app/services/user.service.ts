import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  getusers()
  {
     return this.http.get("https://jsonplaceholder.typicode.com/users", {observe: "response"});
  }
  getuser(id:number)
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);

  }

  deleteuser(id:number)
  {
      this.http.delete("https://jsonplaceholder.typicode.com/users/"+id);
  }
  adduser(data:any)
  {
    this.http.post("https://jsonplaceholder.typicode.com/users", data);
  }
}
