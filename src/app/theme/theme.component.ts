import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
data=[{
"id":"aspnet",
"logo":"./assets/images/aspnet.jpg",
"description":"quiz sur aspnet framework 4.6"
},
{
  "id":"csharp",
  "logo":"./assets/images/csharp.png",
  "description":"quiz sur c# framework 4.6"
  },
  {
    "id":"angular",
    "logo":"./assets/images/angular.png",
    "description":"quiz sur angular framework 7.x"
    }

]
  constructor() { }

  ngOnInit(): void {
  }

}
