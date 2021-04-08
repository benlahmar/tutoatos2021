import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

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
  constructor(private service:CalcService) { }

  ngOnInit(): void {
    console.log(this.service.datax);
    console.log(this.service.abc("koko"));

    console.log(this.service.datax);
  }

}
