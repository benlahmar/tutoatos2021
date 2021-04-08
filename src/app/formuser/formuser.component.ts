import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css']
})
export class FormuserComponent implements OnInit {

  frm:FormGroup;
  frm2:FormGroup;
  constructor(private fb:FormBuilder) {
    
   }
ddd:any;
  ngOnInit(): void {

    this.frm2= this.fb.group(
        {
          pass:['***', Validators.required],
          confpass:['',Validators.required],
          autres:this.fb.group({
            adress:['atoooooooooos'],
            city:['']
          }),
          
          alias: this.fb.array([
            this.fb.control('')
          ])
        }
        
    );
    this.ddd=this.frm2.controls.autres.value;

    console.log();
    this.frm=new FormGroup(
      {
      idx:new FormControl('',[Validators.required,Validators.min(1)]),
      email:new FormControl('', [Validators.required, Validators.email]),
      name:new FormControl('',Validators.required)
    }
      );
  }
  val()
  {
    console.log("rrrrr");
    }

    get aaa()
    {
      let v=this.frm2.get('autres')?.get('adress');
      console.log("$$$$$$$$$$$$"+v?.value);
      return v;
    }
}
