import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data={'nom':"moi", "mail":"h.ben@gmail", "tel":"0658745"}
  constructor() { }

  ngOnInit(): void {
  }

}
