import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChange, SimpleChanges, ɵɵNgOnChangesFeature } from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective implements OnChanges {

  @Input("appTab")
  row:string;
  @Input()
  col:string;

  constructor(private ref:ElementRef, private redu:Renderer2) {
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.row+"------"+this.col);
    let col1=Number.parseInt(this.col);
    let row1=Number.parseInt(this.row);
    let tab=this.redu.createElement("table");
    for(let i=0; i<row1;i++){
      let tr=this.redu.createElement("tr");
      for(let j=0;j<col1;j++)
      {
        let td= this.redu.createElement("td");
        let inp=this.redu.createElement("input")
        //<input type="text" value="hhh"/>
        //<button  >gggg</button>
        this.redu.setAttribute(inp,"type","number");
        this.redu.setAttribute(inp,"value",""+i*j);
        this.redu.appendChild(td, inp);
        this.redu.appendChild(tr,td);
      }
      this.redu.appendChild(tab,tr);
    }
    this.redu.setStyle(tab,"border","solid 2px blue");
    this.redu.appendChild(this.ref.nativeElement, tab);
    //generer un tableau de 5X5 avec un style
  }

  @HostListener('click',['$event'])
  onMouseEnter(event:Event)
  {
    //addEventListner('nom', function(){}, bool);
    console.log(event);
    this.redu.setStyle(this.ref.nativeElement,"border","solid 4px gold");
    let tr=this.redu.createElement("div");
    let td=this.redu.createElement("div");
    this.redu.appendChild(tr,td);

    this.redu.appendChild(this.ref.nativeElement, tr);
    
  }
   
  @HostListener('mouseleave',['$event'])
  fff(event:Event)
  {
    //addEventListner('nom', function(){}, bool);
    console.log(event);
    this.redu.setStyle(this.ref.nativeElement,"border","");
  }
   
}
