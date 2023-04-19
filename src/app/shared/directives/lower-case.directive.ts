import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowerCase]'
})
export class LowerCaseDirective {

  constructor(private elemRef : ElementRef) { }
      @HostListener('keyup') onkeyup(){
        // let val = this.elemRef.nativeElement.value as string
        // console.log(val)
        // this.elemRef.nativeElement.value = val.toLowerCase()
      }
                 
      @HostListener('input', ['$event'])         // keyup/input
       onKeyUp(event: Event){
        let inputControl = event.target as HTMLInputElement;
        let val = inputControl.value as string;
        console.log(val)
        let result = val.toLowerCase();
        inputControl.value = result;
        console.log(result)

      }
}
