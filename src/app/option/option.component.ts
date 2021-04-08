import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../model/Option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input()
  data:Option;

  @Output()
  handler=new EventEmitter();

  @Input()
  modeo?:string;
  check=false;
  constructor() { }

  ngOnInit(): void {
  
  }

  envoi()
  {
    this.handler.emit(this.data);
    console.log(this.data);
  }

  correct()
  {
    if(this.modeo=='submit' && this.data.isAnswer==true)
    return true;
    else
    return false;
  }
}
