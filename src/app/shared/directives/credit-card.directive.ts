import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyUp(event: Event){
    let inputControl = event.target as HTMLInputElement;
    let inputVal = inputControl.value.replace(/\s+/g, '')

 if(inputVal.length > 16){
  let input = inputVal.substring(0,16)
 }

 let numbers : Array<string> = [];

 for(let i = 0; i<numbers.length; i += 4){
    numbers.push(inputVal.substring(i, i+4))
  
 }
 console.log(numbers);
 inputControl.value = inputVal;
    
  }
}
