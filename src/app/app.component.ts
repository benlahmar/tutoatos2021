import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutoatos2021';
  x:number = 15;
  user={'id':1, 'nom':"moi",'age':44};
  users=[{'id':1, 'nom':"moi",'age':44},
  {'id':2, 'nom':"toi",'age':24},
  {'id':3, 'nom':"lui",'age':34}];
  show=false;
  abc()
  {

    console.log("gggg");
    this.show= ! this.show;
  }
  
}
