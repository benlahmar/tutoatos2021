import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {

  constructor(private ref:ElementRef, rendu:Renderer2) {
    rendu.setStyle(ref.nativeElement, "margin","5px");
    rendu.setStyle(ref.nativeElement, "padding","5px");
    rendu.setStyle(ref.nativeElement, "border-radius","50%");
   }

}
