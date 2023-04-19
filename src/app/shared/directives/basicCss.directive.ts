import { Directive, ElementRef, OnInit } from "@angular/core";

 
@Directive({
    selector : "[basicCss]"
})
export class BasicCssDirectives implements OnInit{
 
    constructor(private eleRef : ElementRef){                              // singletone
    }

    ngOnInit(): void {
       console.log(this.eleRef.nativeElement);
       this.eleRef.nativeElement.style.backgroundColor ="orange";
       this.eleRef.nativeElement.style.padding = "5px";
       this.eleRef.nativeElement.style.color = "#fff";
    }



 }