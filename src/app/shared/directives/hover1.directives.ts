import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector : "[hover1Color]"
})
export class Hover1Directives implements OnInit{

@Input() color1 : string =''
@Input() color2 : string =''
constructor(private ElemRe: ElementRef, private rendered2 : Renderer2){
   
}

    ngOnInit() : void {
        console.log(this.ElemRe.nativeElement);
        this.rendered2.setStyle(this.ElemRe.nativeElement, "background-color", this.color1);
        this.ElemRe.nativeElement.style.backgroundColor = "blue";

    }

    @HostListener('mouseover') abf(){
      this.rendered2.setStyle(this.ElemRe.nativeElement, 'color', 'red');
      this.rendered2.setStyle(this.ElemRe.nativeElement, "padding", "3px");
      this.rendered2.setStyle(this.ElemRe.nativeElement, "border", "2px solid black")
      this.rendered2.setStyle(this.ElemRe.nativeElement, "border-radius", "2px")
    }

    @HostListener('mouseout') a(){
        this.rendered2.setStyle(this.ElemRe.nativeElement, "color", this.color2);
        this.rendered2.setStyle(this.ElemRe.nativeElement, "padding", "1%");
        this.rendered2.setStyle(this.ElemRe.nativeElement, "border", "5px solid red")
        this.rendered2.setStyle(this.ElemRe.nativeElement, "border-radius", "4px dooted darkgreen")
    }

}


