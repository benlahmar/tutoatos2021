import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ses:string | null ;
  constructor() { }
abc:any;
  ngOnInit(): void {
    sessionStorage.setItem("idsession","{id:'azerty'}");
    localStorage.setItem("abc","10");
    this.ses = sessionStorage.getItem("idsession");
    
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos.coords);
      
    });
    
  }

}
