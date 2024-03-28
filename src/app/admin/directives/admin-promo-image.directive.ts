import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAdminPromoImage]'
})
export class AdminPromoImageDirective {

  constructor(private eleRef:ElementRef) { 
    eleRef.nativeElement.style.height="225px";
    eleRef.nativeElement.style.width="270px";
    eleRef.nativeElement.style.borderRadius="7px";
  }

}
