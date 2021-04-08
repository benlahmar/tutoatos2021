import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCol]'
})
export class ColDirective {

  prop:string="solid 4px gold";
  constructor(private ref:ElementRef , private redu:Renderer2) {
    redu.addClass(ref.nativeElement,"test");
    redu.setStyle(ref.nativeElement,"border",this.prop);
    redu.setStyle(ref.nativeElement,"transition","5s all");
    redu.setAttribute(ref.nativeElement, "id","123");

   }

}
