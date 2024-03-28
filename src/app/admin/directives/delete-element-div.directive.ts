import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDeleteElementDiv]'
})
export class DeleteElementDivDirective {

  constructor(private eleRef:ElementRef) {
    eleRef.nativeElement.style.display="flex";
    eleRef.nativeElement.style.height="fit-content";
    eleRef.nativeElement.style.alignItems="center";
    eleRef.nativeElement.style.justifyContent="center";
    eleRef.nativeElement.style.padding="20px";
    eleRef.nativeElement.style.paddingTop="50px";
   }

}
